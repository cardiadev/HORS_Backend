"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Junior Suite",
          description: "A room with a queen size bed and a desk. Junior suites are available for one night.",
          price: "1200",
          capacity: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Master Suite",
          description: "A room with a king size bed and a desk. Master suites are the best rooms in the hotel.",
          price: "2500",
          capacity: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deluxe Suite",
          description: "A room with a queen size bed and a desk. Deluxe Suite is a room with a queen size bed and a desk.",
          price: "7800",
          capacity: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
