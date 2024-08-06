// routes/index.js
const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  calculateTip,
  getTips,
} = require("../controllers/userController");
const upload = require("../middlewares/upload");
console.log({ upload });
const validate = require("../middlewares/validate");
const { body, query } = require("express-validator");

// User routes
router.post(
  "/user",
  upload,
  validate([
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ]),
  createUser
);

// router.post(
//   "/user/login",
//   validate([
//     body("email").isEmail().withMessage("Invalid email"),
//     body("password").not().isEmpty().withMessage("Password is required"),
//   ]),
//   loginUser
// );

// router.post(
//   "/tip/calculate",
//   validate([
//     body("place").not().isEmpty().withMessage("Place is required"),
//     body("totalAmount")
//       .isNumeric()
//       .withMessage("Total amount must be a number"),
//     body("tipPercentage")
//       .isNumeric()
//       .withMessage("Tip percentage must be a number"),
//   ]),
//   calculateTip
// );

// router.get(
//   "/tip",
//   validate([
//     query("startDate").not().isEmpty().withMessage("Start date is required"),
//     query("endDate").not().isEmpty().withMessage("End date is required"),
//   ]),
//   getTips
// );

module.exports = router;
