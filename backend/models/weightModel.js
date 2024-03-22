// models/weightModel.js
const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  value: { type: Number, required: true },
});

const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;
