import express from "express";
import {
  updateCart,
  getCart,
  placeOrder,
  getUserOrders,
} from "../controller/cart.js";
import verifyToken from "../lib/verify.js";

const router = express.Router();


router.post("/update",verifyToken, updateCart);

router.get("/:userId", getCart);

router.post("/placeOrder",verifyToken , placeOrder);

router.get("/orders/:userId",verifyToken, getUserOrders);

export default router;
