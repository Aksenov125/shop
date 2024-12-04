'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order, Item}) {
      this.belongsTo(Order, {foreignKey: 'order_id'})
      this.hasMany(Item,{foreignKey:'item_id'})

    }
  }
  OrderItem.init({
    order_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    price: DataTypes.TEXT,
    count: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};