'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservation_has_amenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ReservationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Reservations',
          key: 'id'
        }
      },
      AmenityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Amenities',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservation_has_amenities');
  }
};