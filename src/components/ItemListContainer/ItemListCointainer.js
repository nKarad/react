import React from 'react';
import ItemCount from './ItemCount/ItemCount';
import'./ItemListContainer.css';

const ItemListContainer = (props) => {
    return ( <div className='ItemListCoitainer'
    ><h1>{props.greet}</h1>
  
      </div>);
    };

    export default ItemListContainer;