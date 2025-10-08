const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const farmer = await Farmer.create({ username, password: hash });
    res.json({ success: true, farmer });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const farmer = await Farmer.findOne({ where: { username } });
  if (!farmer) return res.status(401).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, farmer.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: farmer.id }, process.env.JWT_SECRET);
  res.json({ token, farmerId: farmer.id });
});

module.exports = router;
