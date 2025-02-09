import React, { useContext } from "react";
import menuCSS from "./Card.module.css";
import apiRequest from "../../utils/apiRequest.js";
import {  useNavigate } from "react-router-dom";

import  { useState } from 'react';
import { UserContext } from "../../Context/UserContext.jsx";

const MenuCard = ({ item }) => {


const {user} = useContext(UserContext)

  const { dishname, price, desc, image, altText } = item;
  const navigate = useNavigate();

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = async () => {
    console.log({
      dishId: item._id,
      quantity: 1
    });
    try {
      const response = await apiRequest.put("/cart/add", { 
        dishId: item._id,
        quantity: 1 
      });

      if (response.data) {
        alert("Item added to cart!");
        setIsAdded(true);
      } else {
        alert("Failed to add item.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      const response = await apiRequest.put("/cart/remove", { 
        dishId: item._id 
      });
      if (response.data.success) {
        alert("Item removed from cart!");
        setIsAdded(false);
      } else {
        alert("Failed to remove item.");
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };


  const handleToggleCart = async () => {

    if(!user) navigate('/signup')
    if (isAdded) {
      await handleRemoveFromCart();
    } else {
      await handleAddToCart();
    }
  };

  const handleClick = () => {
    navigate('../dish/' + item._id);
  };

  return (
    <div className={menuCSS.card} onClick={handleClick}>
      <img src={image} alt={altText} onClick={handleClick} />
      <div className={menuCSS.info}>
        <h3 onClick={handleClick}>
          {dishname} <span>Rs {price}</span>
        </h3>
        <p>{desc}</p>
        <button className={menuCSS.addButton} onClick={(e) => { e.stopPropagation();  handleToggleCart()}}>
          {isAdded ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};




export default MenuCard;


