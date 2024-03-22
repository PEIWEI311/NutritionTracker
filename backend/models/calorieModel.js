// models/calorieModel.js
const mongoose = require('mongoose');

const calorieSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  intake: { type: Number, required: true },
});

const Calorie = mongoose.model('Calorie', calorieSchema);

module.exports = Calorie;
