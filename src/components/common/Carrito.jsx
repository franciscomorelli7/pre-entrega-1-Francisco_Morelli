import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './common.css'
import { Link } from 'react-router-dom'

export const Carrito = () => {
  
  const {carrito, total, vaciar} = useContext(CartContext)
    function vaciarCarrito(){
        vaciar()
    }
    return (
    <div className="container-fluid">
        <div className="row">
            <h2 className="productos-en-carrito text-center">Productos en carrito</h2>
        </div>
        { carrito.length > 0 &&
            <div className="row justify-content-center">
            <div className="col-4 border">
                <h6 className='text-center'>Imagen</h6>
            </div>
            <div className="col-2 border">
                <h6 className="text-center">Producto</h6>
            </div>
            <div className="col-2 border">
                <h6 className="text-center">Cantidad</h6>
            </div>
            <div className="col-2 border">
                <h6 className="text-center">Precio</h6>
            </div>
        </div>}
            {
                carrito.map((producto)=>(
                <div className="row justify-content-center">
                    <div className="col-4  border">
                        <img src={producto.imagen} alt={producto.nombre} className="imagenesCarrito " />
                    </div>
                    <div className="col-2 border">
                        <h4 className='text-center'>{producto.nombre}</h4>
                    </div>
                    <div className="col-2 border">
                        <p className='text-center'>{producto.cantidad}</p>
                    </div>
                    <div className="col-2 border">
                        <p className='text-center'>${producto.precio}</p>
                        <p className='text-center'>${producto.precio * producto.cantidad}</p>
                    </div>
                </div>
                ))
            }
            
           { carrito.length > 0 ?
           <div className="row justify-content-center mt-3">
               <div className="col-3"><button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar</button></div>
               <div className="col-4"><h4 className="text-center bg-primary rounded">Total: ${total()}</h4></div>
               <div className="col-3 botonFinalizar "><Link to="/checkout" className="btn btn-success">Finalizar compra</Link></div>
            </div>:
            <h2>El carrito esta vacio</h2>
            }
        
    </div>
  )
}
