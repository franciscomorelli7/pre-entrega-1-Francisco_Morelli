import { useContext, useState } from 'react'
import './common.css'
 import SumarRestar from './SumarRestar'
import { CartContext } from '../../context/CartContext'
 
export function ItemDetail({item}) {
    const [number, setNumber] =useState(0)
    
    const {carrito, agregarAlCarrito}= useContext(CartContext)
    console.log(carrito)
    const sumar =()=>{
      setNumber(number + 1 )
    }
    const restar =() =>{
     if(number>0){
       setNumber(number-1)
       
     }
    }
    
    return (
   
        <div className="row columna-detalles">
            <div className="col-4">
                <img className="imagenes-detalle" src={item.imagen} alt="" />
            </div>
            <div className="col-6 columna-detalles">
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <SumarRestar number={number}
                 sumar={sumar} restar={restar} 
                 agregarAlCarrito={()=>agregarAlCarrito(item, number)}/>
                
                
                
            </div>
        </div>
   
  )
}

