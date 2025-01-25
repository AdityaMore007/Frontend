import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        dishId: { type: mongoose.Schema.Types.ObjectId, ref: "Dish", required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
    totalPrice: { type: Number, default: 0 },
    totalCalories: { type: Number, default: 0 },
    totalPrepTime: { type: Number, default: 0 },
    status: { type: String, default: "Pending" }, // "Pending", "Placed", "Completed", etc.
  },
  { timestamps: true }
);

const Cart = model("Cart", CartSchema);

export default Cart;
