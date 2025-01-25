import express from "express";
import {
  updateCart,
  getCart,
  placeOrder,
  getUserOrders,
} from "../controller/cart.js";
import verifyToken from "../lib/verify.js";

const router = express.Router();

// Update cart (add/update items)
router.post("/update",verifyToken, updateCart);

// Get the current cart for a user
router.get("/:userId", getCart);

// Place an order from the cart
router.post("/placeOrder",verifyToken , placeOrder);

// Get all orders for a user
router.get("/orders/:userId",verifyToken, getUserOrders);

export default router;
