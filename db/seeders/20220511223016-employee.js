"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          firstName: "Alfredo",
          lastName: "Adame",
          employeeNumber: "1001",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Roberto",
          lastName: "Palazuelos",
          employeeNumber: "1002",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Maria",
          lastName: "Gonzalez",
          employeeNumber: "1002",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};
