'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clientes', [{  
      nome: 'Ivens Müller',
      email: 'ivensmuller@teste.com',
      telefone: 99999-9999,
      senha: '******',
      data_nascimento: new Date(1990, 2, 21),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nome: 'Bruno Yuri Alves',
      email: 'yuribruno@teste.com',
      telefone: 99999-9999,
      senha: '******',
      data_nascimento: new Date(1990, 3, 22),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nome: 'Nykolle Mallone',
      email: 'nykmallone@teste.com',
      telefone: 99999-9999,
      senha: '******',
      data_nascimento: new Date(1990, 4, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('clientes', null);
     
  }
};
