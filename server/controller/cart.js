import Cart from "../models/cart.js";
import Dish from "../models/dish.js";

export const updateCart = async (req, res) => {
  try {
    const { userId, items } = req.body;
    let cart = await Cart.findOne({ userId, status: "Pending" });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    cart.items = items;
    let totalPrice = 0;
    let totalCalories = 0;
    let totalPrepTime = 0;

    for (const item of items) {
      const dish = await Dish.findById(item.dishId);
      if (dish) {
        totalPrice += dish.price * item.quantity;
        totalCalories += dish.calories * item.quantity;
        totalPrepTime += dish.prepTime * item.quantity;
      }
    }

    cart.totalPrice = totalPrice;
    cart.totalCalories = totalCalories;
    cart.totalPrepTime = totalPrepTime;

    await cart.save();
    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (error) {
    res.status(500).json({ error: "Error updating cart", details: error.message });
  }
};

export const placeOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const cart = await Cart.findOne({ userId, status: "Pending" });
    if (!cart) {
      return res.status(404).json({ error: "No active cart found" });
    }
    cart.status = "Placed";
    await cart.save();
    res.status(200).json({ message: "Order placed successfully", order: cart });
  } catch (error) {
    res.status(500).json({ error: "Error placing order", details: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Cart.find({ userId, status: { $ne: "Pending" } }).populate("items.dishId");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId, status: "Pending" }).populate("items.dishId");
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};