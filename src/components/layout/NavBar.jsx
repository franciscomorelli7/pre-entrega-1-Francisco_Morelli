import { CartWidget } from "../containers/CartWidget";
import './layout.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
  const cartItemCount = 0;
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" >Mundo Cuervo</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item bg-danger itemsMenu border border-dark">
              <Link to="/productos" className="nav-Link btn btn-danger" >Todos los productos</Link>
            </li>
            <li className="nav-item bg-danger itemsMenu border border-dark">
              <Link to="/productos/equipacion" className="nav-Link btn btn-danger">Equipación</Link>
            </li>
            <li className="nav-item bg-danger itemsMenu border border-dark">
              <Link to="/productos/accesorios" className="nav-Link btn btn-danger" >Accesorios</Link>
            </li>
            <li className="nav-item bg-danger itemsMenu border border-dark">
              <Link to="/productos/abrigos" className="nav-Link btn btn-danger" >Abrigos</Link>
            </li>
          </ul>
        </div>
        <CartWidget itemContador={cartItemCount} />
      </nav>
    );
  }
    


