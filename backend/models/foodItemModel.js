// models/foodItemModel.js
const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  nutrition : {type : Map, of: Number, required: true},
  name : { type: String, required: true },
  ingredients : { type: String, required: true },
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
