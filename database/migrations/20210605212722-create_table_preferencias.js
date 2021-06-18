'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('preferencias', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      PREFERENCIAS: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');
  }
};
