'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("reservation_has_amenities", [{
      ReservationId: 1,
      AmenityId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reservation_has_amenities", null, {});
  }
};
