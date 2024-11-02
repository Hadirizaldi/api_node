import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Stock = sequelize.define("Stock", {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Stock;
