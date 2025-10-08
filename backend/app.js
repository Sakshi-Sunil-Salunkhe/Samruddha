const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const cattleRoutes = require('./routes/cattle');
const sensorRoutes = require('./routes/sensors');
const vetRoutes = require('./routes/vet');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/cattle', cattleRoutes);
app.use('/api/sensors', sensorRoutes);
app.use('/api/vet', vetRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Unable to connect to MySQL:', err);
});
