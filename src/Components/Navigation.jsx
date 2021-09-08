import React from 'react';
import { toggleSlide } from '../scripts/toggleSlide';
import logo from '../assets/images/logos/logoMain.png';
export default function Navigation() {
    return (
            <nav class="nav-bar">
            <div class="logo"><a href=""><img src={logo} alt=""/></a></div>
        <ul class="nav-links">
            <li><a href="">Dishes</a></li>
            <li><a href="">Deserts</a></li>
            <li><a href="">Drinks</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
        <button onClick={()=>toggleSlide()} class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </button>
    </nav>
    )
}
