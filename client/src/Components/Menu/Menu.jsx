import React, { useEffect, useState } from "react";
import MenuCard from "../Card/Card";
import menuCSS from "./Menu.module.css"; 
import apiRequest from "../../utils/apiRequest.js";


const Menu = () => {


  const [menuItems, setdishes] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [element, setelement] = useState("");


  useEffect(()=> {
    async function getdishes () {
      console.log(searchTerm)
      const endpoint = searchTerm
          ? `/dish/search?query=${encodeURIComponent(searchTerm)}`
          : "/dish";
      const res = await apiRequest.get(endpoint);
      console.log(res.data)
      setdishes(res.data)
    }
    getdishes()
  },[searchTerm])

  const handleonclick = (e) => {
    // console.log(searchTerm,element)
    setSearchTerm(element)
  }
  return (
    <div className={`${menuCSS.Menu_wrapper} section`} id="menu">
      <small className="section_title">From Our Menu</small>
      <div className="search">
        {/* <input type="text" placeholder="Search"/> */}
        <input
        type="text"
        placeholder="Search dishes..."
        value={element}
        onChange={(e) => setelement(e.target.value)}
        
      />
        <button onClick={(e) => handleonclick(e)}> Search</button>
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
            item={item}
        
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
