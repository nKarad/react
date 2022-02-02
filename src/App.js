
import './App.css';
import'./components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import Header from './components/Header/Header';


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
    </div>
  );
}

export default App;