import React, { useState } from 'react';
import './CartPage.css'; // Ensure this CSS file exists

const CartPage = () => {
  // Dummy data for the cart (this can later be replaced by state or context data)
  const [cartItems, setCartItems] = useState([
    {
      name: "Spaghetti Bolognese",
      price: 12.99,
      prepTime: 30, // in minutes
      quantity: 2,
    },
    {
      name: "Margherita Pizza",
      price: 10.99,
      prepTime: 20,
      quantity: 1,
    },
  ]);

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalTime = () => {
    return cartItems.reduce((total, item) => total + item.prepTime * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Please add some dishes to your cart.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
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
