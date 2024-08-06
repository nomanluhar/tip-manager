const express = require("express");
const { signup, login } = require("../controllers/userController");
const uploadSingle = require("../middleware/uploadMiddleware");
const {
  signupValidationRules,
  validate,
} = require("../middleware/validationMiddleware");

const router = express.Router();

// Use the upload middleware for the signup route
router.post("/signup", uploadSingle, signup);
router.post("/login", login);

module.exports = router;
