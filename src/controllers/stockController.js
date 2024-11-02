import sequelize from "../config/db.js";
import { Stock, Product } from "../models/associations.js";

const addStock = async (req, res) => {
  const { productId, totalStock, date } = req.body;

  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const stock = await Stock.create({ productId, totalStock, date });
    res.status(201).json({
      message: "Stock added successfully",
      data: stock,
    });
  } catch (error) {
    console.error("Error adding stock:", error);
    res.status(400).json({ error: "Error adding stock" });
  }
};

const getAllStock = async (req, res) => {
  try {
    const stocks = await Stock.findAll({
      include: [{ model: Product, attributes: ["name"] }], // Include product name
    });

    const response = stocks.map((item) => ({
      productId: item.productId,
      productName: item.Product.name,
      totalStock: item.totalStock,
      date: item.date,
    }));

    res.status(200).json({
      message: "Stocks retrieved successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error fetching stocks:", error);
    res.status(500).json({ error: "Error fetching stocks" });
  }
};

const getStockByDate = async (req, res) => {
  const { date } = req.query;

  try {
    const stock = await Stock.findAll({
      where: { date },
      include: [{ model: Product, attributes: ["name"] }],
    });

    const response = stock.map((item) => ({
      name: item.Product.name,
      totalStock: item.totalStock,
    }));

    res.json(response);
  } catch (error) {
    console.error("Error fetching stock:", error);
    res.status(500).json({ error: "Error fetching stock" });
  }
};

const updateStock = async (req, res) => {
  const { stockId } = req.params;
  const { totalStock, date } = req.body;

  try {
    const stock = await Stock.findByPk(stockId);
    if (!stock) {
      return res.status(404).json({ error: "Stock not found" });
    }

    stock.totalStock = totalStock;
    stock.date = date;
    await stock.save();
    res.json(stock);
  } catch (error) {
    console.error("Error updating stock:", error);
    res.status(400).json({ error: "Error updating stock" });
  }
};

export { addStock, getAllStock, getStockByDate, updateStock };
