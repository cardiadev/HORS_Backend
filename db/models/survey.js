'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Survey.belongsTo(models.Reservation);
    }
  }
  Survey.init({
    question01: DataTypes.STRING,
    question02: DataTypes.STRING,
    question03: DataTypes.STRING,
    question04: DataTypes.STRING,
    question05: DataTypes.STRING,
    question06: DataTypes.STRING,
    question07: DataTypes.STRING,
    comments: DataTypes.STRING,
    answered: DataTypes.BOOLEAN,
    ReservationId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Survey',
  });
  return Survey;
};