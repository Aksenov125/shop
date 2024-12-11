'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      
      {
        title:'Шапка черная',
        size: 'L',
        img:'https://specline.ru/upload/iblock/134/9kt6ivet4t102p0b5t9s55gl25g53iuh/shapka_vyazannaya.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Шапка белая',
        size: 'L1',
        img: 'https://cdn1.ozone.ru/s3/multimedia-g/c600/6161910736.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Nike',
        size: '42',
        img:'https://nikeairspb.ru/image/cache/catalog/!!!!!/zimnie-nike-air-force-1-mid-07-lv8-utility-chernye-s-belym-35-40-1000x600.jpg',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Adidas',
        size: '45',
        img: 'https://cdn1.ozone.ru/s3/multimedia-h/6690665573.jpg',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Куртка Nike',
        size: 'L',
        img:'https://www.professionalsport.ru/spree/products/000/173/830/original/cj7578_010.jpg?1596563748',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Куртка Adidas',
        size: 'XL',
        img: 'https://a.lmcdn.ru/product/A/D/AD094EMCAJ68_1.jpg',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
