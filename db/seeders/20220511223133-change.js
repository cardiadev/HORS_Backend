"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Changes",
      [
        {
          date: new Date(),
          reason: "No le gusto la habitacion",
          change: "Cambio de habitación",
          RoomId: 10,
          EmployeeId: 1,
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
