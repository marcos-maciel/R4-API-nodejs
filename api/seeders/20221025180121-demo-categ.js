'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Categories', [
			{
				name: 'Eletrônicos',
				image: '/resouces/images/eletronico.png'
			},
			{
				name: 'Roupas',
				image: '/resouces/images/roupa.png'
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
