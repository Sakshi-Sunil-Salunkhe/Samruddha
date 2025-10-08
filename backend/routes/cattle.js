const express = require('express');
const router = express.Router();
const Cattle = require('../models/Cattle');

// Add new cattle
router.post('/', async (req, res) => {
  try {
    const { farmerId, cattleId, age, breed } = req.body;
    const cattle = await Cattle.create({ farmerId, cattleId, age, breed });
    res.json(cattle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all cattle for a farmer
router.get('/:farmerId', async (req, res) => {
  try {
    const { farmerId } = req.params;
    const cattle = await Cattle.findAll({ where: { farmerId } });
    res.json(cattle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
