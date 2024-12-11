'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({OrderItem,podcategory}) {
      this.hasMany(OrderItem, {foreignKey: 'item_id'})
      this.belongsTo(podcategory, {foreignKey: ' category_id'})

    }
  }
  Item.init({
    title: DataTypes.TEXT,                                        
    size: DataTypes.TEXT,
    img: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};