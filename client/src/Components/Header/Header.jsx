import React from "react";
import headerCSS from './../Header/Header.module.css' 
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className={headerCSS.Header_wrapper} id="home">
            <small>Traditional & Hygiene</small>
            <h1>For The <span>Enjoyment</span> <br/> of Scrumptious Fare</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus voluptatibus ad, dicta quas itaque iusto sunt earum, nisi recusandae aliquid porro perferendis quibusdam, mollitia ullam odio laborum qui. Molestias.</p>
            <div className={headerCSS.header_btns}>
                <Link to='/menu'>
                <button>Explore Menu</button>
                </Link>
                
            </div>
            <div className={headerCSS.social}>
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-youtube-line"></i>
            </div>
        </div>
    )
}


export default Header
