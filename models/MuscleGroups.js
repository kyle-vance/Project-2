const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MuscleGroups extends Model {}

MuscleGroups.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'MuscleGroups',
  }
);

module.exports = MuscleGroups;
