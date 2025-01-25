import React from "react";
import MenuCard from "../Card/Card";
import menuCSS from "./Menu.module.css"; // Styling

// import imgSalad from "../../assets/Salad.jpg";
// import imgBurger from "../../assets/burger.jpg";
// import imgMisal from "../../assets/misal.jpeg";
// import imgPaneer from "../../assets/paneer.jpg";
// import imgSoya from "../../assets/soya.jpg";
// import imgKadhai from "../../assets/kadhai.jpg";
// import imgItalian1 from "../../assets/italian1.jpg";
// import imgItalian2 from "../../assets/italian2.jpg";

// Menu items array
const menuItems = [
  {
    name: "Vegetable Salad",
    price: 30,
    description: "BeetRoot and Tomatos, Ricota",
    // image: imgSalad,
    altText: "Vegetable Salad",
  },
  {
    name: "Veggie Burger",
    price: 20,
    description: "Mayoniese with Cheese",
    // image: imgBurger,
    altText: "Veggie Burger",
  },
  {
    name: "Misal Pav",
    price: 60,
    description: "Spicy with Extra Butter",
    // image: imgMisal,
    altText: "Misal Pav",
  },
  {
    name: "Tandoori Paneer Tikka",
    price: 50,
    description: "Indian Spices Special",
    // image: imgPaneer,
    altText: "Tandoori Paneer Tikka",
  },
  {
    name: "Punjabi Soya Chap",
    price: 30,
    description: "Made with Punjabi Spices",
    // image: imgSoya,
    altText: "Punjabi Soya Chap",
  },
  {
    name: "Kadhai Paneer",
    price: 40,
    description: "Paneer Specials!!",
    // image: imgKadhai,
    altText: "Kadhai Paneer",
  },
  {
    name: "Pasta alla Boscaiola",
    price: 40,
    description: "Made with dried mushrooms, tomato sauce",
    // image: imgItalian1,
    altText: "Pasta alla Boscaiola",
  },
  {
    name: "Macaroni",
    price: 40,
    description: "Bit of sausage & creamy ricotta tomato",
    // image: imgItalian2,
    altText: "Macaroni",
  },
];

const Menu = () => {
  return (
    <div className={`${menuCSS.Menu_wrapper} section`} id="menu">
      <small className="section_title">From Our Menu</small>
      <div className="search">
        <input type="text" placeholder="Search"/>
        <button> Search</button>
      </div>
      <h1>
        Our <span>Special Offer</span>
      </h1>

      <div className={menuCSS.menu_categories}>
        <small>Morning</small>
        <small>Lunch</small>
        <small>Dinner</small>
        <small>Fast Food</small>
      </div>

      <div className={menuCSS.Menu_cards}>
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image || null}
            altText={item.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
