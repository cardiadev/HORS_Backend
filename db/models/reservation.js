'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.hasOne(models.Invoice);
      Reservation.hasMany(models.Extra);
      Reservation.hasMany(models.Change);
      Reservation.hasOne(models.Survey);
      Reservation.belongsTo(models.Room)
      Reservation.belongsTo(models.Client)
      Reservation.belongsTo(models.Employee)


    }
  }
  Reservation.init({
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
    paymentMethod: DataTypes.STRING,
    RoomId: DataTypes.INTEGER,
    ClientId: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};