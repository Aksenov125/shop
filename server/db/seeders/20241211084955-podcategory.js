'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('podcategories', [
      {
        title:'Головные уборы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Обувь',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Куртки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('podcategories', null, {});
  },
};
