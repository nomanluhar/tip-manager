const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Session = require("../models/Session");

dotenv.config();

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const proPic = req.file ? req.file.filename : null;

  // Additional validation
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }

  // Ensure file was uploaded if specified
  if (!req.file && !proPic) {
    return res.status(400).json({ message: "Profile picture is required" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, proPic, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ name: newUser.name, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
console.log('1-')
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Invalidate previous sessions
    await Session.deleteMany({ userId: user._id });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    await new Session({ userId: user._id, token }).save();

    res.status(200).json({ name: user.name, token });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Server error" });
  }
};
