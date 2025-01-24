import React, { useRef } from "react";
import navcss from '../Components/Nav.module.css'

function Nav () {

    const menu = useRef();


    const menuhandler = () => {
        menu.current.classList.toggle(navcss.showMenu);
    }

    const nav = useRef()

    window.addEventListener('scroll' , function() {
        if (this.window.scrollY > 100) {
            nav.current.classList.add(navcss.navSticky)
        }

        else {
            nav.current.classList.remove(navcss.navSticky)
        }
    } )



    return (
        <div className={navcss.Nav_Wrapper} ref={nav} >
            <div className={navcss.logo}>
                <a href="#">Luxera</a>
                <i className="ri-restaurant-2-line"></i>
            </div>
            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <div className={navcss.nav_btns}>
                <button>Book Seat <i className="ri-restaurant-2-line"></i></button>
                <i className="ri-menu-3-line" id={navcss.bar} onClick={menuhandler}></i>
            </div>
        </div>
    )
}

export default Nav