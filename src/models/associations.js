import Price from "./Price.js";
import Product from "./Product.js";
import Stock from "./Stock.js";

Product.belongsTo(Stock, { foreignKey: "productId" });
Product.belongsTo(Price, { foreignKey: "productId" });

Stock.hasMany(Product, { foreignKey: "productId" });

Price.hasMany(Product, { foreignKey: "productId" });

export { Price, Product, Stock };
