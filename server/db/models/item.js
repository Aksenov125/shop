'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({OrderItem,Category}) {
      this.hasMany(OrderItem, {foreignKey: 'item_id'})
      this.belongsTo(Category, {foreignKey: 'category_id'})

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