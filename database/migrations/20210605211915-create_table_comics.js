'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('comics', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      TITULO: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      AUTOR: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      ANO: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      SINOPSE: {
          type: Sequelize.STRING,
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
