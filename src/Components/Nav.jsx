import React, { useRef } from "react";
import navcss from '../Components/Nav.module.css'

function Nav () {

    const menu = useRef();


    const menuhandler = () => {
        menu.current.classList.toggle(navcss.showMenu);
    }



    return (
        <div className={navcss.Nav_Wrapper}>
            <div className={navcss.logo}>
                <a href="#">Luxera</a>
                <i className="ri-restaurant-2-line"></i>
            </div>
            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Features</a></li>
            </ul>
            <div className={navcss.nav_btns}>
                <button>Book Seat <i className="ri-restaurant-2-line"></i></button>
                <i className="ri-menu-3-line" id={navcss.bar} onClick={menuhandler}></i>
            </div>
        </div>
    )
}

export default Nav