
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Water routes
router.get('/water', dataController.getWaterData);
router.post('/water', dataController.createWaterData);
router.delete('/water/:id', dataController.deleteWaterData);

// Calorie routes
router.get('/calorie', dataController.getCalorieData);
router.post('/calorie', dataController.createCalorieData);
router.delete('/calorie/:id', dataController.deleteCalorieData);

// Weight routes
router.get('/weight', dataController.getWeightData);
router.post('/weight', dataController.createWeightData);
router.delete('/weight/:id', dataController.deleteWeightData);

// Food Entry routes
router.get('/foodentry', dataController.getFoodEntryData);
router.post('/foodentry', dataController.createFoodEntryData);
router.delete('/foodentry/:id', dataController.deleteFoodEntryData);

// Food Item routes
router.get('/fooditem', dataController.getFoodItemData);
router.post('/fooditem', dataController.createFoodItemData);
router.delete('/fooditem/:id', dataController.deleteFoodItemData);


module.exports = router;
