import './common.css'
 import SumarRestar from './SumarRestar'
 export function ItemDetail({item}) {
  return (
   
        <div className="row columna-detalles">
            <div className="col-4">
                <img className="imagenes-detalle" src={item.imagen} alt="" />
            </div>
            <div className="col-6 columna-detalles">
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <SumarRestar/>
                
                
                <button className='btn btn-danger mt-5'>
                    Agregar al carrito
                </button>
            </div>
        </div>
   
  )
}

