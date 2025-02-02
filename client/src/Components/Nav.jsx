import React, { useContext, useRef } from "react";
import navcss from '../Components/Nav.module.css'
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";

function Nav () {
    const { user } = useContext(UserContext);
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
            <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
        {/* <li><Link to="/signup">Signup</Link></li> */}
            </ul>
            <div className={navcss.nav_btns}>
                if(user){
                    <img src={user.imageUrl} alt="" />
                }
                else{

            <Link to="/signup">
                <button>Sign up <i className="ri-restaurant-2-line"></i></button>
            </Link>
                }
                <i className="ri-menu-3-line" id={navcss.bar} onClick={menuhandler}></i>
            </div>
        </div>
    )
}

export default Nav