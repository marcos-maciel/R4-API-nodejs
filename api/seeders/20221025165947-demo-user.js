'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
      name: 'Marcos',
      email: 'm.maciel07@hotmail.com'
      },
      {
        name: 'Maria',
        email: 'm.maria@hotmail.com'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
