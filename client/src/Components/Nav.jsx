import React, { useContext, useRef, useEffect } from "react";
import navcss from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import apiRequest from "../utils/apiRequest";

function Nav() {
  const { user, logout} = useContext(UserContext);
  const menu = useRef(null);
  const nav = useRef(null);
  const navigate = useNavigate()
    // console.log(nav)
  const menuhandler = () => {
    if (menu.current) {
      menu.current.classList.toggle(navcss.showMenu);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      
      if (nav.current) {
        if (window.scrollY > 100) {
          nav.current.classList.add(navcss.navSticky);
        } else {
          nav.current.classList.remove(navcss.navSticky);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleOnclick = async ()=>{
    try {
      await apiRequest.post('/auth/logout')
      logout()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={navcss.Nav_Wrapper} ref={nav}>
      <div className={navcss.logo}>
        <a href="#">Luxera</a>
        <i className="ri-restaurant-2-line"></i>
      </div>
      <ul ref={menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        
        <li>
          <Link to="/testimonial">Testimonial</Link>
        </li>
      </ul>
      <div className={navcss.nav_btns}>
        {user ? (
          <div className="left">
            <img src={user.imageUrl} alt="User" onClick={(e)=>  handleOnclick(e)}/>

            <Link to='/cart'>
              <button>Cart</button>
            </Link>

          </div>

          
        ) : (
          <Link to="/signup">
            <button>
              Sign up <i className="ri-restaurant-2-line"></i>
            </button>
          </Link>
        )}
     
        <i
          className={`ri-menu-3-line ${navcss.bar}`}
          onClick={menuhandler}
        ></i>
      </div>
    </div>
  );
}

export default Nav;
