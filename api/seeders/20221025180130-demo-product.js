'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        idCategorie: '1',
        name: 'Celular',
        image: '/resouces/images/celular.png'
      },
      {
        idCategorie: '1',
        name: 'Notebook',
        image: '/resouces/images/eletronico.png'
      },
      {
        idCategorie: '2',
        name: 'Camisa',
        image: '/resouces/images/camisa.png'
      },
      {
        idCategorie: '2',
        name: 'Shorts',
        image: '/resouces/images/shorts.png'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
