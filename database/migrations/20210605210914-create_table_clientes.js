'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      email: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      telefone: {
          type: Sequelize.STRING(12),
          allowNull: false
      },
      senha_hash: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      data_nascimento: {
          type: Sequelize.DATE,
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
    
     await queryInterface.dropTable('clientes');
  }
};
