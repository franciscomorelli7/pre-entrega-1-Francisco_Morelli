
import './App.css';
import {NavBar} from './components/layout/NavBar'
import { ItemListContainer } from "./components/containers/ItemListContainer" ;

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Mundo Cuervo!" />
    </div>

  );
}

export default App;
