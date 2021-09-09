import React from "react";
import { toggleSlide } from "../scripts/toggleSlide";
import logo from "../assets/images/logos/logoMain.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/category/1">Dishes</Link>
        </li>
        <li>
          <Link to="/category/2">Deserts</Link>
        </li>
        <li>
          <Link to="/category/3">Drinks</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      <button onClick={() => toggleSlide()} className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    </nav>
  );
}
