'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkInsert('preferencias', [{
       preferencias: 'mangas',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       preferencias: 'DC comics',
       createdAt: new Date(),
       updatedAt: new Date() 
     },{
       preferencias: 'Marvel comics',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       preferencias: 'infantis',
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
       preferencias: 'Graphic Novels',
       createdAt: new Date(),
       updatedAt: new Date()
     }]);

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('preferencias', null, {});
  
  }
};
