import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';



const productoRebaja = "Jerseys de temporadas pasadas"
const porcentajeRebaja = "40%"
const compraMinima = 22;




function App() {
  return (

 
    <div className="App">
      <NavBar/>

      <h1>E-commerce del K</h1>
      <p>Ofertas del mes: Rebajas en {productoRebaja}
       del {porcentajeRebaja} compra minima {compraMinima}</p>
    </div>
  );
}

export default App;
