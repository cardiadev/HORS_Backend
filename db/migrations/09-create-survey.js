'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question01: {
        type: Sequelize.STRING
      },
      question02: {
        type: Sequelize.STRING
      },
      question03: {
        type: Sequelize.STRING
      },
      question04: {
        type: Sequelize.STRING
      },
      question05: {
        type: Sequelize.STRING
      },
      question06: {
        type: Sequelize.STRING
      },
      question07: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      answered: {
        type: Sequelize.BOOLEAN
      },
      ReservationId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Surveys');
  }
};