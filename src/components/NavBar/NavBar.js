import React from 'react';
import'./NavBar.css';
import logoNav from "./logoNav.png";
import CartWidget from './../CartWidget/CartWidget.js';

const NavBar = () => {
    return (

<nav className='Navigation'>


<ul>


    <li class="inicio"><a href="index.html">Tienda</a></li>
    <li class="inicio"><a href="promociones.html">Promociones</a></li>
    <li class="inicio"><a href="contacto.html">Contactanos</a></li>
    <CartWidget/>
</ul>
</nav>
);
};

export default NavBar