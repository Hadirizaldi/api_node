'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PriceHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PriceHistory.init({
    product_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    effective_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PriceHistory',
  });
  return PriceHistory;
};