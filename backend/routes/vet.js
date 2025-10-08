const express = require('express');
const router = express.Router();

router.post('/consult', (req, res) => {
  res.json({ success: true, message: 'Consultation requested, vet will contact you soon.' });
});

module.exports = router;
