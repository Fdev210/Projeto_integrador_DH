'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comics', [{  
      titulo: 'Cuidando do Mundo',
      autor: 'Mauricio de Sousa',
      ano: '2000',
      sinopse: `A Turma apresenta maneiras simples e eficazes de conservar os recursos ambientais e 
      minimizar os efeitos causados pela mão do homem. Versinhos e rimas sobre cuidados voltados ao 
      Planeta mostram como os elementos da natureza são fundamentais no dia a dia das pessoas e destacam 
      os principais problemas que atingem o meio ambiente. O livro ainda propõe soluções práticas que podem 
      ajudar na recuperação do Planeta.`,
      capa: 'uploads/cp123456.jpg',
      antevisao: JSON.stringify([ '/uploads/69ec7111dbec1dde.jpg', 
                                  '/uploads/d3ac278b62577c76.jpg', 
                                  '/uploads/f50cc86a8bcfa314.jpg' ]),
      endereço: '/uploads/abc12345.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      titulo: 'Tirinhas da Mafalda',
      autor: 'Eunice Isaias',
      ano: '2012',
      sinopse: `Este trabalho é resultado do projeto de pesquisa intitulado As tiras da Mafalda: conteúdos 
      de Geografia na linguagem de quadrinhos que investiga as várias possibilidades de uso de tiras de 
      quadrinhos da Mafalda para mediar o ensino de Geografia. Para tanto, foram selecionadas tiras de 
      quadrinhos do livro Toda Mafalda, do argentino Quino. A escolha teve como critério a relação do conteúdo
      temas da Geografia escolar.`,
      capa: 'uploads/cp7890.png',
      antevisao: JSON.stringify([ '/uploads/cde2345601.jpg', 
                                  '/uploads/cde2345608.jpg', 
                                  '/uploads/cde2345621.jpg' ]),
      endereço: '/uploads/cde23456.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
},

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('comics', null);
     
  }
};
