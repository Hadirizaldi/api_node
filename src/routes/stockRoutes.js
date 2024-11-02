import express from "express";
import { addStock, getAllStock, getStockByDate, updateStock } from "../controllers/stockController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(authMiddleware);

router.post("/", addStock);
router.get("/", getAllStock);
router.get("/date", getStockByDate);
router.put("/:id", updateStock);

export default router;
