import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import HamburgerIcon from "./images/icon-hamburger.svg";
import HamburgerClose from "./images/icon-close.svg";
import catrImage from './images/icons8-shopping-cart-48.png'
import CartItem from "../Cart/CartItem";
import loginImage from './images/login.png'

function Nav() {
  const user = localStorage.getItem('token')
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (navIsOpen) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [navIsOpen]);

  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };
  
const logoutHandler=()=>{
  localStorage.removeItem("token")
  window.location.reload();
}

  return (
    <nav className="nav-bar">
      <Link className="logo" to="/">
        HFoods
      </Link>

      <ul className={`nav-links ${navIsOpen ? "show-nav" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {user && 
          <li>
          <button className="logout-btn" onClick={logoutHandler} ><h4>LogOut</h4></button>
          </li> 
                
          }
          {!user &&  <li>
          <Link to="/auth"> <img className="cart-img" src={loginImage} alt="login icon" /></Link>
        </li> }
       
        {user && <li>
          <Link to="/cart"><img className="cart-img" src={catrImage} alt="cart icon"  /></Link>
        </li>}
        
      </ul>

      <div onClick={handleClick} className="hamburger">
        {!navIsOpen && <img src={HamburgerIcon} alt="" />}
        {navIsOpen && <img src={HamburgerClose} alt="" />}
      </div>
    </nav>
  );
}

export default Nav;

