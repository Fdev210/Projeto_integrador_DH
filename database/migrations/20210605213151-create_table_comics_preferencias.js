'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('comics_preferencias', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      comics_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'comics',
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
   
    await queryInterface.dropTable('comics_preferencias');
  }
};
