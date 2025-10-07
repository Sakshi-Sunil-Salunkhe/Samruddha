const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Farmer = sequelize.define('Farmer', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'farmers'
});

module.exports = Farmer;
