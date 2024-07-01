import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

try {
  const connectionInstance = await mongoose.connect(
    `mongodb://localhost:27017/${process.env.dbname}`,
    // `${process.env.MONGODB_URI}`,
  );

  
  console.log(
    "\nMongodb connected!!DB HOST:",
    connectionInstance.connection.host,
  );
} catch (error) {
  console.error("Mongodb connection Error:", error);
  process.exit(1);
}

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, fullName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, fullName, email, password: hashedPassword });
    await user.save();
    res.status(200).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
    if (!user) {
      console.error('User not found');
      return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid password');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).send('Error logging in');
  }
});

// Update endpoint
app.put('/update', authenticateJWT, async (req, res) => {
  const { fullName, email, username } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: { fullName, email, username } },
      { new: true }
    );

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(400).send('Error updating user');
  }
});

//delete endpoint
app.delete('/delete', authenticateJWT, async (req, res) => {

});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
