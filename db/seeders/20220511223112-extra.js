"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Extras",
      [
        {
          description: "Silla Rota",
          price: "4000",
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Vidrio Roto",
          price: "1350",
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Habano Cubano",
          price: "450",
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Extras", null, {});
  },
};
