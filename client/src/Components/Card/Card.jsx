import React from "react";
import menuCSS from "./Card.module.css";
import apiRequest from "../../utils/apiRequest.js";

const MenuCard = ({ item }) => {

  const {name, price, description, image, altText} = item
  const handleAddToCart = async () => {
    try {
      const response = await apiRequest.post("/cart/add", { 
        name, 
        price, 
        description, 
        quantity: 1 
      });

      if (response.success) {
        alert("Item added to cart!");
      } else {
        alert("Failed to add item.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className={menuCSS.card}>
      <img src={image} alt={altText} />
      <div className={menuCSS.info}>
        <h3>
          {name} <span>${price}</span>
        </h3>
        <p>{description}</p>
        <button className={menuCSS.addButton} onClick={handleAddToCart}>
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
