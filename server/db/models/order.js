'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, OrderItem}) {
      this.hasMany(OrderItem,{foreignKey: 'order_id'})
      this.belongsTo(User,{foreignKey: 'user_id'})
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.TEXT,
    total_price: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};