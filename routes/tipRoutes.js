const express = require("express");
const { calculateTip, getTips } = require("../controllers/tipController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/calculate", authMiddleware, calculateTip);
router.get("/", authMiddleware, getTips);

module.exports = router;
