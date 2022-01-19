import logo from './logo.svg';
import './App.css';

const productoRebaja = "Jerseys de temporadas pasadas"
const porcentajeRebaja = "40%"
const compraMinima = 22;

function App() {
  return (
    <div className="App">



      <h1>E-commerce del K</h1>
      <p>Ofertas del mes: Rebajas en {productoRebaja} del {productoRebaja} compra minima {compraMinima}}</p>
    </div>
  );
}

export default App;
