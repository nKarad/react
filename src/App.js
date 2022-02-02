
import './App.css';
import'./components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';


const productoRebaja = "Jerseys de temporadas pasadas"
const porcentajeRebaja = "40%"
const compraMinima = 22;




function App() {
  return (

 
    <div className="App">
      <NavBar/>
      <Header title="Prueba de titulo mediante prop"
      subtitle= "Prueba de sub mediante prop"/>


<h1>E-commerce del K</h1>
      <p>Ofertas del mes: Rebajas en {productoRebaja}
       del {porcentajeRebaja} compra minima {compraMinima}</p>


      <CardComponent
      name="El Pepe"
      profession = "Imitador de Marley"
      img="https://pbs.twimg.com/profile_images/1324436167585128448/WfERgDkP_400x400.jpg"/>
      <CardComponent
      name= "Ricarrdo, con doble r"
      profession = "Cuidador de patos"
      img="https://i.kym-cdn.com/entries/icons/facebook/000/014/896/unnamed.jpg"/>
      <CardComponent
      name= "El hermano del Pepe"
      profession = "El Patrón del mal"
      img="https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"/>
    



    </div>
  );
}

export default App;