// models/foodEntryModel.js
const mongoose = require('mongoose');

const foodEntrySchema = new mongoose.Schema({
  name : { type: String, required: true },
  date: { type: Date, required: true },
  parts : [{type : mongoose.Schema.Types.ObjectId, ref : "FoodItem"}],
  userId: { type: String, required: true }
});

const FoodEntry = mongoose.model('FoodEntry', foodEntrySchema);

module.exports = FoodEntry;
