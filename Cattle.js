const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Cattle = sequelize.define('Cattle', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  farmerId: { type: DataTypes.INTEGER, allowNull: false },
  cattleId: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER },
  breed: { type: DataTypes.STRING },
  healthStatus: { type: DataTypes.STRING },
  temperature: { type: DataTypes.FLOAT },
  humidity: { type: DataTypes.FLOAT },
  threat: { type: DataTypes.STRING }
}, {
  tableName: 'cattle'
});

module.exports = Cattle;