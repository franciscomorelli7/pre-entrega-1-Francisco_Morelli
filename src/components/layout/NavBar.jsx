import { CartWidget } from "../containers/CartWidget";
import './layout.css'


export const NavBar = () => {
  const cartItemCount = 0;
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-brand" >Mundo Cuervo</button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item bg-danger itemsMenu border border-dark">
              <button className="nav-link">Equipación</button>
            </li>
            <li className="nav-item bg-danger itemsMenu border border-dark">
              <button className="nav-link" >Accesorios</button>
            </li>
            <li className="nav-item bg-danger itemsMenu border border-dark">
              <button className="nav-link" >Abrigos</button>
            </li>
            <li className="nav-item bg-danger itemsMenu border border-dark">
              <button className="nav-link" >Calzado</button>
            </li>
          </ul>
        </div>
        <CartWidget itemContador={cartItemCount} />
      </nav>
    );
  }
    


