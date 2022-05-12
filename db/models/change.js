'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Change extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Change.belongsTo(models.Room);
      Change.belongsTo(models.Employee);
      Change.belongsTo(models.Reservation);
    }
  }
  Change.init({
    date: DataTypes.DATE,
    reason: DataTypes.STRING,
    change: DataTypes.STRING,
    RoomId: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER,
    ReservationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Change',
  });
  return Change;
};