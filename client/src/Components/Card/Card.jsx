import React from "react";
import menuCSS from "./Card.module.css";

const MenuCard = ({ name, price, description, image, altText }) => {
  const handleAddClick = () => {
    console.log(`${name} added!`);
    // Add your logic for handling the "Add" action here
  };

  return (
    <div className={menuCSS.card}>
      <img src={image} alt={altText} />
      <div className={menuCSS.info}>
        <h3>
          {name} <span>${price}</span>
        </h3>
        <p>{description}</p>
        <button className={menuCSS.addButton} onClick={handleAddClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
