import React, { useContext,  useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form';
import './common.css'
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from '../../firebase/data';


export const Checkout = () => {
    const [orderId, setOrderId]= useState("")
    const {carrito, total, vaciar} = useContext(CartContext)
  
    const {register, handleSubmit} =useForm()
    
    const comprar =(data)=>{
        const order ={
            client : data,
            products : carrito,
            total: total()
        }
       
        const pedidosFire = collection(dataBase, "checkout")

        addDoc(pedidosFire, order)
            .then((doc)=>{
                setOrderId(doc.id)
                vaciar()
            })
        
   
    }
    if(orderId){
        return(
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1>Muchas gracias por comprar en mundo cuervo!</h1>
                    <p>Tu numero de orden es {orderId}</p>
                </div>
            </div>
        )
    console.log(orderId)
    }
        return (
            <div className="container-fluid ">
                <div className="row justify-content-center">
                    <h1 className="main-title text-center">Finalizar compra</h1>
                    <div className="col-4">
                        <form className="formulario justify-content-center" onSubmit={handleSubmit(comprar)}>

                            <input className='inputsForm' type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                            <input className='inputsForm' type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                            <input className='inputsForm' type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                            <button className="enviar btn btn-success mt-5" type="submit">Comprar</button>

                        </form>
                    </div>
                </div>
            </div>
          )
  
}
