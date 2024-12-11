'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class podcategory extends Model {
    
    static associate({Item,Category}) {
      this.hasMany(Item, {foreignKey: ' category_id'})
      this.belongsTo(Category, {foreignKey: 'categories_id'})
    }
  }
  podcategory.init({
    title: DataTypes.TEXT,
    categories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'podcategory',
  });
  return podcategory;
};