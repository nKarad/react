import React from 'react';
import'./NavBar.css';
import logoNav from "./logoNav.png";

const NavBar = () => {
    return (

<nav className='Navigation'>


<ul>
{<a className="logoNav" href='index.html'><img src={logoNav} alt='logo' /></a>}
    <li class="inicio"><a href="index.html">Tienda</a></li>
    <li class="inicio"><a href="promociones.html">Promociones</a></li>
    <li class="inicio"><a href="contacto.html">Contactanos</a></li>
</ul>
</nav>
);
};

export default NavBar