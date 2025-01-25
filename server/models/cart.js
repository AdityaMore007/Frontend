import {Schema, Model} from "mongoose"

const cartSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
      {
        dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish' },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'pending' }, // e.g., 'pending', 'completed'
    createdAt: { type: Date, default: Date.now },
    deliveryAddress: String,
},{timestamps:true})


const Cart = new Model('cart', cartSchema)

export default Cart