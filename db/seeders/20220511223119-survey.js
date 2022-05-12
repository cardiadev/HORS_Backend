"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Surveys",
      [
        {
          question01: "Yes",
          question02: "Yes",
          question03: "Yes",
          question04: "Yes",
          question05: "Yes",
          question06: "Yes",
          question07: "Yes",
          comments: "No comments at the moment",
          answered: true,
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question01: "No",
          question02: "Yes",
          question03: "No",
          question04: "Yes",
          question05: "No",
          question06: "Yes",
          question07: "No",
          comments: "Mala experiencia con este hotel",
          answered: true,
          ReservationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question01: "No",
          question02: "Yes",
          question03: "No",
          question04: "No",
          question05: "Yes",
          question06: "Yes",
          question07: "Yes",
          comments: "Precios muy caros",
          answered: true,
          ReservationId: 3,
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
