// import express from "express";
// import {
//   updateCart,
//   getCart,
//   placeOrder,
//   getUserOrders,
// } from "../controller/cart.js";
import { addItem, addItemToCart, createCart, decrementItem, deleteCart, getOrder, incrementItem, placeOrder, removeItem } from "../controller/cart.js";
import verifyToken from "../lib/verify.js";

// const router = express.Router();


// router.post("/update",verifyToken, updateCart);

// router.get("/:userId", getCart);

// router.post("/place",verifyToken , placeOrder);
// router.post("/add",verifyToken , addorder);


// router.get("/orders/:userId",verifyToken, getUserOrders);

// export default router;

import express from "express";


const router = express.Router();


router.post("/",verifyToken, getOrder);

router.put("/add",verifyToken, addItem);

router.put("/increment", verifyToken, incrementItem);
router.put("/decrement", verifyToken, decrementItem);
router.put("/remove", verifyToken, removeItem);
router.delete("/", verifyToken, deleteCart);

export default router;

