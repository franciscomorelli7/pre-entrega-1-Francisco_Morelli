
import './App.css';
import {NavBar} from './components/layout/NavBar'
import { ItemListContainer } from "./components/containers/ItemListContainer" ;
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Carrito } from './components/common/Carrito';

function App() {
  
  return (
    <div>
      <CartProvider>
              <BrowserRouter>
                <NavBar />

                  <Routes>
                      <Route path='/' element={<ItemListContainer/>}/>
                      <Route path="/item/:id" element={  <ItemDetailContainer/>}/>
                      <Route path='/productos' element = {<ItemListContainer/>}  />
                      <Route path='/productos/:categoria' element = {<ItemListContainer/>}  />
                      <Route path='/carrito' element={<Carrito/>}/>
                  </Routes>

                
              </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
