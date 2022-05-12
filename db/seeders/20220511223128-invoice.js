"use strict";
// function random invoice number
function randomInvoiceNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Invoices",
      [
        {
          invoiceNumber: randomInvoiceNumber(1000, 9999),
          invoiceDate: new Date(),
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoiceNumber: randomInvoiceNumber(1000, 9999),
          invoiceDate: new Date(),
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoiceNumber: randomInvoiceNumber(1000, 9999),
          invoiceDate: new Date(),
          ReservationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Invoices", null, {});
  },
};
