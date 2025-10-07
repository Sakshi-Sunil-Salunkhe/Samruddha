const express = require('express');
const router = express.Router();

router.get('/:cattleId', (req, res) => {
  const { cattleId } = req.params;
  // Mock sensor data
  res.json({
    cattleId,
    temperature: Math.round(36 + Math.random() * 4),
    humidity: Math.round(50 + Math.random() * 10),
    threat: Math.random() > 0.9 ? 'Yes' : 'No'
  });
});

module.exports = router;