const Tip = require("../models/Tip");
const User = require("../models/User");

exports.calculateTip = async (req, res) => {
  const { place, totalAmount, tipPercentage } = req.body;
  if (!place || !totalAmount || !tipPercentage) {
    return res.status(400).json({ message: "invalid field" });
  }

  try {
    const userId = req.user.id; // assume user is added to req by middleware
    const tipAmount = (totalAmount * tipPercentage) / 100;
    const newTip = new Tip({ userId, place, totalAmount, tipAmount });
    await newTip.save();
    res.status(200).json({ tip: tipAmount });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTips = async (req, res) => {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate) {
    return res.status(400).json({ message: "invalid field" });
  }

  try {
    const userId = req.user.id;
    const tips = await Tip.find({
      userId,
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });
    console.log(tips);
    res.status(200).json(tips);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
