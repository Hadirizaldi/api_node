import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Price = sequelize.define("Price", {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Products",
      key: "id",
    },
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  effective_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Price;
