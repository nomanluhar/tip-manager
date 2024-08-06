const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  proPic: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
});

module.exports = mongoose.model('User', userSchema);
