import './common.css'
function SumarRestar({number, sumar, restar, agregarAlCarrito}) {
 
  return (
    <div >
        <div className="botonesAgregarBorrar">
        <button onClick={restar} className="borrar botonesDetalles btn btn-outline-light">-</button>
          <p className='numerito fs-4'>{number}</p>
          <button onClick={sumar} className="agregar botonesDetalles btn btn-outline-light">+</button>
        </div>
        <button className='btn btn-danger mt-5 boton-agregar ' onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
    
  )
}

export default SumarRestar