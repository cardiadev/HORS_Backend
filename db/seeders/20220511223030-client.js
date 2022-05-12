"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          firstName: "Alfredo",
          lastName: "Adame",
          company: "Adame & Asociados",
          address: "Morelos #123, Col. Centro",
          city: "Guadalajara",
          state: "Jalisco",
          country: "Mexico",
          zip: "44750",
          phone: "3316457879",
          email: "alfredoa@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Julieta Maria",
          lastName: "Gomez Perez",
          company: "Infraestructura y Comunicaciones",
          address: "Matamoros #2256, Col. del Huerto",
          city: "Tonala",
          state: "Jalisco",
          country: "Mexico",
          zip: "44741",
          phone: "6458754121",
          email: "jgomez@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Armando Jose",
          lastName: "Parra Delgado",
          company: "Grupo Parra",
          address: "Francisco I Madero #874, Col. Jardines de la Plaza",
          city: "Zapopan",
          state: "Jalisco",
          country: "Mexico",
          zip: "44777",
          phone: "3316301452",
          email: "aparradelgado@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(Clients, null, {});
  },
};
