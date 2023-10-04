import React from 'react'
import './common.css'
import { Link } from 'react-router-dom'
function Item({producto}) {
  return (
    <div className="col-4 flex-column items border rounded" id={producto.id}>
        <img className='imagenesList' src={producto.imagen} alt={producto.nombre} />
        <h4>{producto.nombre}</h4>
        <p>Precio ${producto.precio}</p>
        <Link className='detalles btn btn-danger' to={`/item/${producto.id}`}>Detalles</Link>
    </div>
  )
}

export default Item