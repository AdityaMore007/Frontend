import React, { useEffect, useState } from 'react';
import './CartPage.css'; // Ensure this CSS file exists
import apiRequest from '../../utils/apiRequest.js';

const CartPage = ({userId}) => {
  // Dummy data for the cart (this can later be replaced by state or context data)
  // const [cartItems, setCartItems] = useState([
  //   {
  //     name: "Spaghetti Bolognese",
  //     price: 12.99,
  //     prepTime: 30, // in minutes
  //     quantity: 2,
  //   },
  //   {
  //     name: "Margherita Pizza",
  //     price: 10.99,
  //     prepTime: 20,
  //     quantity: 1,
  //   },
  // ]);

  const [cart, setCart] = useState(null);

  useEffect(() => {
    const getCart = async () => {
      const data = await apiRequest(userId);
      setCart(data);
    };
    getCart();
  }, [userId]);

  const handleRemoveItem = (index) => {
    const newCartItems = cart.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalTime = () => {
    return cart.reduce((total, item) => total + item.prepTime * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty. Please add some dishes to your cart.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Prep Time: {item.prepTime} minutes</p>
                </div>
                <button className="remove-item" onClick={() => handleRemoveItem(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <p>Total Preparation Time: {calculateTotalTime()} minutes</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
