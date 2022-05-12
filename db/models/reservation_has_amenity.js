'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation_has_amenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Amenity, Reservation}) {
      // define association here
      Amenity.belongsToMany(Reservation, {
        through: 'reservation_has_amenity',
      })
      Reservation.belongsToMany(Amenity, {
        through: 'reservation_has_amenity',
      })
    }
  }
  reservation_has_amenity.init({
    ReservationId: DataTypes.INTEGER,
    AmenityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reservation_has_amenity',
  });
  return reservation_has_amenity;
};