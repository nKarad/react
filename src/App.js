
import './App.css';
import React, {useState} from 'react';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import ItemCount from './components/ItemListContainer/ItemCount/ItemCount';




const App = () => {

 

  return (


    <div className="App">

      <NavBar />
      <ItemListContainer greet ="Bienvenidos al E-commerce del K"
      />
      <Header title="Prueba de titulo mediante prop"
         />



      <CardComponent
        name="El Pepe"
        profession="Imitador de Marley"
        img="https://pbs.twimg.com/profile_images/1324436167585128448/WfERgDkP_400x400.jpg" />
      <CardComponent
        name="Ricarrdo, con doble r"
        profession="Cuidador de patos"
        img="https://i.kym-cdn.com/entries/icons/facebook/000/014/896/unnamed.jpg"
         />
      <CardComponent
        name="El hermano del Pepe"
        profession="El Patrón del mal"
        img="https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" 
        ></CardComponent>

    {/* nn */}
    </div>
  );
}


export default App;