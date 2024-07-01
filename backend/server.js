import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser())



//sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: `${process.env.MONGODB_URI}/${process.env.dbname}`,
    collectionName: 'sessions',
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,// 1 day
    httpOnly: true,
  }
}));
//MongoDB connection
try {
  const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${process.env.dbname}`,
  );


  console.log(
    "\nMongodb connected!!DB HOST:",
    connectionInstance.connection.host,
  );
} catch (error) {
  console.error("Mongodb connection Error:", error);
  process.exit(1);
}

//User Schema
const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

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

      return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid password');
    }
    let userId = await User.findOne({ username: usernameOrEmail }, { password: password })
    userId = userId._id;
    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email
    };
    res.status(200).json({ message: 'Login successful', userId });
  } catch (error) {
    res.status(400).send('Error logging in');
  }
});

// Update endpoint
app.put('/update', async (req, res) => {
  const { user_id, username, fullName, email, password } = req.body;
  const newPass = await bcrypt.hash(password, 10);
  try {
    const user = await User.findOneAndUpdate(
      { '_id': user_id }, { $set: { username, fullName, email, password: newPass } }, { new: true }

    );

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(400).send('Error updating user');
  }

});

// Delete endpoint

app.post('/delete', async (req, res) => {
  const user_id = req.body.user_id;
  try {
    const user = await User.findOneAndDelete({ '_id': user_id });
    res.status(200).json({ message: 'User deleted successfully' });

  } catch (error) {
    res.status(400).send('Error deleting user');
  }

});


// Logout endpoint

app.post('/logout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.clearCookie('connect.sid');
    res.status(200).send('Logout successful');
  });
});


app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
