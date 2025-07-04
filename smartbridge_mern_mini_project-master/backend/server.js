const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000'  // Only allow requests from React frontend
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  
  

// Models
const User = require("./models/User");
const CourseRegistration = require("./models/CourseRegistration");

// Routes

// User Sign In (register)
app.post("/api/auth/signin", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Save user (in real app, hash password!)
    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
});

// Course Registration
// server.js (or routes file)
app.post("/api/courses/register", async (req, res) => {
  try {
    const { username, email, courseName, courseDuration, courseAmount } = req.body;

    if (!username || !email || !courseName || !courseDuration || !courseAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRegistration = new CourseRegistration({
      username,
      email,
      courseName,
      courseDuration,
      courseAmount,
    });

    await newRegistration.save();
    res.status(201).json({ message: "Course registered successfully" });
  } catch (err) {
    console.error("Error in course registration:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
