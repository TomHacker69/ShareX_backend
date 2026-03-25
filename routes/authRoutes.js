const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// ✅ Test route
router.get("/", (req, res) => {
  res.send("Auth route working");
});

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, collegeId } = req.body;

  if (!email.endsWith("@kiet.edu")) {
    return res.status(400).json({ msg: "Use college email" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashed, collegeId });
  await user.save();

  res.json({ msg: "User Registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  res.json({ msg: "Login success", user });
});

module.exports = router;