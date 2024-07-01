import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  email: String,
  password: String,
  // isDeleted:{
  //   default:false,
  // }
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

    res.status(200).json({ message: 'Login successful', userId });
  } catch (error) {
    res.status(400).send('Error logging in');
  }
});

// Update endpoint
app.put('/edit', async (req, res) => {
  const { user_id, username, fullName, email, password } = req.body;
  const newPass = bcrypt.hash(password, 10);
  try {
    const user = await User.findOneAndUpdate(
      { '_id': user_id }, { $set: { username, fullName, email, newPass } }, { new: true }

    );
    console.log(user)

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(400).send('Error updating user');
  }

});

//delete endpoint

app.post('/delete', async (req, res) => {
  const { user_id, username, fullName, email, password } = req.body;

})

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
