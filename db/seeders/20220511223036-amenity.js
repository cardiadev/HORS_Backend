"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Amenities",
      [
        {
          name: "Toallas Extras",
          description: "Juego de toallas extras para los huéspedes",
          price: "850",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Botella de Vino Riotte",
          description: "Botella de vino marca Riotte, sur de Francia",
          price: "2400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Servicio de Tintoreria",
          description: "Servicio de tintoreria para los huéspedes",
          price: "340",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Amenities", null, {});
  },
};
