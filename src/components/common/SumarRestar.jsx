import React, { useState } from 'react'

function SumarRestar() {
 const [number, setNumber] =useState(0)
 
 const sumar =()=>{
   setNumber(number + 1 )
 }
 const restar =() =>{
  if(number>0){
    setNumber(number-1)
  }
 }
 
  return (
    <div className="botonesAgregarBorrar">
        <button onClick={restar} className="borrar botonesDetalles btn btn-outline-light">-</button>
        <p className='numerito fs-4'>{number}</p>
        <button onClick={sumar} className="agregar botonesDetalles btn btn-outline-light">+</button>
    </div>
  )
}




export default SumarRestar