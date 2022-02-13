import React, {useState }   from "react";


 const ItemCount = () => {

        const [counter, setCounter] = useState(0);  
        const [stock, setStock] = useState(10);  

        const handlerCounterUp = () => {
          setCounter(counter + 1);
        ;
        };

        const handlerCounterDown = () => {
            setCounter(counter - 1)
          };

return(
          <div className="itemCount">
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>Sumar item</button>
            <button onClick={handlerCounterDown}>Restar item</button>    
          </div>)
     
      }

export default ItemCount
