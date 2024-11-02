import Price from "./Price";
import Product from "./Product";
import Stock from "./Stock";

Product.belongsTo(Stock, { foreignKey: "productId" });
Product.belongsTo(Price, { foreignKey: "productId" });

Stock.hasMany(Product, { foreignKey: "productId" });

Price.hasMany(Product, { foreignKey: "productId" });
