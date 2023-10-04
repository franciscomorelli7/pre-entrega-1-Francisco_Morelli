
import './App.css';
import {NavBar} from './components/layout/NavBar'
import { ItemListContainer } from "./components/containers/ItemListContainer" ;
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
        <NavBar />

          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={  <ItemDetailContainer/>}/>
              <Route path='/productos' element = {<ItemListContainer/>}  />
              <Route path='/productos/:categoria' element = {<ItemListContainer/>}  />
          </Routes>

        
      </BrowserRouter>
    

  );
}

export default App;
