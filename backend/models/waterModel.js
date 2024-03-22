// models/waterModel.js
const mongoose = require('mongoose');

const waterSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Water = mongoose.model('Water', waterSchema);

module.exports = Water;
