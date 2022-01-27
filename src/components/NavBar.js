import React from 'react';
import'./NavBar.css';
import logo from './logo.png'

const NavBar = () => {
    return (

<nav className='Navigation'>

<a href='index.html'><img src={logo} alt='logo' /></a>
<ul>
    
    <li class="inicio"><a href="index.html">Tienda</a></li>
    <li class="inicio"><a href="promociones.html">Promociones</a></li>
    <li class="inicio"><a href="contacto.html">Contactanos</a></li>
</ul>
</nav>
);
};

export default NavBar