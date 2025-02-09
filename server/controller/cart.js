import Cart from "../models/cart.js";
import Dish from "../models/dish.js";
import User from "../models/user.js";

export const createCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = new Cart({ userId, items: [] });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ message: "UserId is required" });
    const cart = await Cart.findOne({ userId, status: "Pending" }).populate("items.dishId");
    if (!cart) return res.status(404).json({ message: "Cart not found for this user" });
    const dishesItems = cart.items.map(item => ({ dish: item.dishId, quantity: item.quantity }));
    res.status(200).json(dishesItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addItemToCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const { dishId, quantity } = req.body;
    const qty = quantity || 1;
    const dish = await Dish.findById(dishId);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    const cart = await Cart.findById(cartId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    if (cart.userId.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Access denied" });
    const itemIndex = cart.items.findIndex(item => item.dishId.toString() === dishId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += qty;
    } else {
      cart.items.push({ dishId, quantity: qty });
    }
    let totalPrice = 0, totalCalories = 0, totalPrepTime = 0;
    for (const item of cart.items) {
      const itemDish = await Dish.findById(item.dishId);
      totalPrice += itemDish.price * item.quantity;
      totalCalories += itemDish.calories * item.quantity;
      totalPrepTime += itemDish.prepTime * item.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.totalCalories = totalCalories;
    cart.totalPrepTime = totalPrepTime;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const placeOrder = async (req, res) => {
  try {
    const { cartId } = req.params;
    const cart = await Cart.findById(cartId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    if (cart.userId.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Access denied" });
    if (cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });
    cart.status = "Placed";
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addItem = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json();
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ message: "Unauthorized user" });
    const { dishId, quantity } = req.body;
    const qty = quantity || 1;
    const dish = await Dish.findById(dishId);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    let cart = await Cart.findOne({ userId: user._id, status: "Pending" });
    if (!cart) cart = new Cart({ userId: user._id, items: [] });
    const itemIndex = cart.items.findIndex(item => item.dishId.toString() === dishId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += qty;
    } else {
      cart.items.push({ dishId, quantity: qty });
    }
    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const removeItem = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ message: "Unauthorized user" });
    const { dishId } = req.body;
    if (!dishId) return res.status(400).json({ message: "Dish ID is required" });
    const dish = await Dish.findById(dishId);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    let cart = await Cart.findOne({ userId: user._id, status: "Pending" });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    const itemIndex = cart.items.findIndex(item => item.dishId.toString() === dishId);
    if (itemIndex === -1) return res.status(404).json({ message: "Item not found in cart" });
    cart.items.splice(itemIndex, 1);
    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const incrementItem = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ message: "User not found" });
    const { dishId } = req.body;
    let cart = await Cart.findOne({ userId: user._id, status: "Pending" });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    const itemIndex = cart.items.findIndex(item => item.dishId.toString() === dishId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const decrementItem = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ message: "User not found" });
    const { dishId } = req.body;
    let cart = await Cart.findOne({ userId: user._id, status: "Pending" });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    const itemIndex = cart.items.findIndex(item => item.dishId.toString() === dishId);
    if (itemIndex > -1) {
      if (cart.items[itemIndex].quantity > 1) {
        cart.items[itemIndex].quantity -= 1;
      } else {
        cart.items.splice(itemIndex, 1);
      }
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Not authenticated" });
    const userId = req.user.id || req.user._id;
    const cart = await Cart.findOneAndDelete({ userId: userId, status: "Pending" });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json({ message: "Cart deleted successfully", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
