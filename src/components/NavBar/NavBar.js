import React from 'react';
import'./NavBar.css';
import CartWidget from './../CartWidget/CartWidget.js';

const NavBar = () => {
    return (

<nav className='Navigation'>


<ul>


<li className="inicio"><a href="index.html">Tienda</a></li>
    <li className="inicio"><a href="promociones.html">Promociones</a></li>
    <li className="inicio"><a href="contacto.html">Contactanos</a></li>
    <CartWidget/>
    </ul>
</nav>
);
};

export default NavBar