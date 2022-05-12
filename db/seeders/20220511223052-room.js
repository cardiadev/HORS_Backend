"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rooms",
      [
        {
          roomNumber: 101,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 102,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 103,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 104,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 105,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 201,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 202,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 203,
          availability: true,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 401,
          availability: true,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 402,
          availability: true,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 403,
          availability: true,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 404,
          availability: true,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 405,
          availability: true,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 501,
          availability: true,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 502,
          availability: true,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 601,
          availability: true,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 602,
          availability: true,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomNumber: 602,
          availability: true,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rooms", null, {});
  },
};
