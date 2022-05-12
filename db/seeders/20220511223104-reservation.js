"use strict";


// Date.now() plus 5 days
function getDatePlusDays(num) {
  var date = new Date();
  date.setDate(date.getDate() + num);
  return date;
}


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reservations",
      [
        {
          checkIn: getDatePlusDays(5),
          checkOut: getDatePlusDays(8),
          paymentMethod: "Visa",
          RoomId: 1,
          ClientId: 1,
          EmployeeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkIn: getDatePlusDays(2),
          checkOut: getDatePlusDays(6),
          paymentMethod: "MasterCard",
          RoomId: 3,
          ClientId: 2,
          EmployeeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkIn: getDatePlusDays(6),
          checkOut: getDatePlusDays(10),
          paymentMethod: "Visa",
          RoomId: 6,
          ClientId: 3,
          EmployeeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(Reservations, null, {});
  },
};
