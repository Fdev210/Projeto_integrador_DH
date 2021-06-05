'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('clientes_preferencias', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      clientes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id'
        }
      },
      preferencia_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'preferencias',
          key: 'id'
        }
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('clientes_preferencias');

  }
};
