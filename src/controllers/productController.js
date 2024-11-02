import sequelize from "../config/db.js";
import { Product } from "../models/associations.js";
import { Op } from "sequelize";

export const createProduct = async (req, res) => {
  const { name, code, stock, price, photo } = req.body;

  try {
    const product = await Product.create({ name, code, stock, price, photo });
    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ error: "Error creating product" });
  }
};

export const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json({
    message: "Products retrieved successfully",
    data: products,
  });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, stock, price, photo } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    await product.update({ name, stock, price, photo });

    res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ error: "Error updating product" });
  }
};
