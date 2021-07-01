'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('comics', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      titulo: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      autor: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      ano: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      sinopse: {
          type: Sequelize.STRING,
          allowNull: false
          
      },
      endereço: {
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
