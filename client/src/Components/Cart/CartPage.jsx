import React, { useContext, useEffect, useState } from 'react';
import './CartPage.css'; 
import apiRequest from '../../utils/apiRequest.js';
import {UserContext} from '../../Context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

  const { user }= useContext(UserContext)
  console.log(JSON.stringify(user, null, 2));
  const navigate = useNavigate()

  const [cart, setCart] = useState([]);

  useEffect(() => {

    if (!user) return;
    const getCart = async () => {
      console.log(user._id)
      const res = await apiRequest.post('/cart/',{userId :user._id});
      console.log(res.data)
      setCart(res.data);
    };
    getCart();
  }, [user]);

  const handleRemoveItem = async (index,item) => {
    try {
      console.log(item.dish)
      const newCartItems = cart.filter((_, i) => i !== index);
      await apiRequest.put("/cart/remove", { dishId: item.dish._id });
      setCart(newCartItems);
      
    } catch (error) {
      console.log(error)
    } 
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.dish.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalTime = () => {
    return cart.reduce((total, item) => total + item.dish.prepTime * item.quantity, 0);
  };

  const handleAdd = async(item) =>{
 try {  
  console.log(cart)
  const newdish = cart.map(ele =>
    ele.dish._id === item.dish._id
      ? { ...ele, quantity: ele.quantity + 1 }
      : ele
  );
  
      await apiRequest.put("/cart/increment", { dishId: item.dish._id });
      console.log(newdish)
      setCart(newdish) 
 } catch (error) {
    console.log(error)
 }
  }

  const handleOrder = async() => {
    alert('order has been placed')
    await apiRequest.delete('/cart/')
    setCart([])
    navigate('/menu')
  }
  if(cart.length == 0) return <div>Loading...</div>;
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
                  <h2>{item.dish.dishname}</h2>
                  <p>Price: Rs {item.dish.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Prep Time: {item.dish.prepTime} minutes</p>
                </div>
                <button className="remove-item" onClick={() => handleRemoveItem(index, item)}>
                  Remove
                </button>
                <button className="remove-item" onClick={() => handleAdd(item)}> Add</button>
              </div>
            ))}
          </div>
        )}
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Total Price: Rs {calculateTotalPrice()}</p>
          <p>Total Preparation Time: {calculateTotalTime()} minutes</p>
          <button className="checkout-button" onClick={handleOrder}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
