import React from "react";
import menuCSS from "./../Menu/Menu.module.css";

import imgSalad from "./../../assets/Salad.jpg";
import imgBurger from "./../../assets/vegburger1.jpg";
import imgMisal from "./../../assets/misal.jpeg";
import imgPaneer from "./../../assets/tandoori.jpg";
import imgSoya from "./../../assets/Soya-Chaap-2.jpg";
import imgKadhai from "./../../assets/kadai.jpg";
import imgitalian1 from "./../../assets/boscaiola.jpg";
import imgitalian2 from "./../../assets/macaroni.jpeg";

function Menu() {
  return (
    <div className={`${menuCSS.Menu_wrapper} section`}>
      <small className="section_title">From Our Menu</small>
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
        <div className={menuCSS.card}>
          <img src={imgSalad} alt="Menu-image" />
          <div className={menuCSS.info}>
            <h3>
              Vegetable Salad <span>$30</span>
            </h3>
            <p>BeetRoot and Tomatos,Ricota</p>
          </div>
        </div>

        <div className={menuCSS.card}>
          <img src={imgBurger} alt="Menu-image" />
          <div className={menuCSS.info}>
            <h3>
              Veggie Burger <span>$20</span>
            </h3>
            <p>Mayoniese with Cheese</p>
          </div>
        </div>

        <div className={menuCSS.card}>
            <img src={imgMisal} alt="" />
          <div className={menuCSS.info}>
            <h3>
              Misal Pav <span>$60</span>
            </h3>
            <p>Spicy with Extra Butter</p>
          </div>
        </div>

        <div className={menuCSS.card}>
            <img src={imgPaneer} alt="" />
          <div className={menuCSS.info}>
            <h3>
              Tandoori Paneer Tikka <span>$50</span>
            </h3>
            <p>Indian Spices Special</p>
          </div>
        </div>

        <div className={menuCSS.card}>
            <img src={imgSoya} alt="" />
          <div className={menuCSS.info}>
            <h3>
              Punjabi Soya Chap <span>$30</span>
            </h3>
            <p>Made with Punjabi Spices </p>
          </div>
        </div>

        <div className={menuCSS.card}>
            <img src={imgKadhai} alt="" />
          <div className={menuCSS.info}>
            <h3>
              Kadhai Paneer <span>$40</span>
            </h3>
            <p>Paneer Specials!!</p>
          </div>
        </div>
        <div className={menuCSS.card}>
            <img src={imgitalian1} alt="" />
          <div className={menuCSS.info}>
            <h3>
                Pasta alla Boscaiola <span>$40</span>
            </h3>
            <p>Made with dried mushrooms, tomato sauce</p>
          </div>
        </div>
        <div className={menuCSS.card}>
            <img src={imgitalian2} alt="" />
          <div className={menuCSS.info}>
            <h3>
                Macaroni <span>$40</span>
            </h3>
            <p>bit of sausage & creamy ricotta tomato</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
