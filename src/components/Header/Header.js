
import React from 'react';
import'./Header.css';
import imageHeader from "./imageHeader.png"
const Header = (props) => {
  return ( <div className='Header'>
<img src={imageHeader}/>
<h1>{props.title}</h1>
<h2>{props.subtitle}</h2>
  </div>);
};

export default Header;
