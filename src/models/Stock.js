import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Stock = sequelize.define("Stock", {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Products",
      key: "id",
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Stock;
