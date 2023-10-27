import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()
 
const carritoInicial= JSON.parse(localStorage.getItem("carrito"))||[];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial)
  
    const agregarAlCarrito = (item,number) =>{
      const itemAgregado = {...item, cantidad: number}
      const newCart= [...carrito];
      const agregarProducto = newCart.find ((prod)=>prod.id===itemAgregado.id); 
      
  
      if(agregarProducto){
        agregarProducto.cantidad += number
        
      }else{
        newCart.push(itemAgregado)
      }
      setCarrito(newCart)
      
    }
  
    const actualizarNumero = () =>{
  
      return carrito.reduce ((acc, producto)=> acc + producto.cantidad, 0)
      
    }
   console.log(carritoInicial)
    const total = () =>{
      return carrito.reduce((acc, producto)=>acc + producto.precio * producto.cantidad, 0)
    }
   function vaciar(){
      setCarrito([])
      
   }
   useEffect(() => {
     localStorage.setItem("carrito", JSON.stringify(carrito))
   }, [carrito])
   

    

   return   (
            <CartContext.Provider value={{carrito, agregarAlCarrito, actualizarNumero, total, vaciar}}>
                {children}
            </CartContext.Provider>
            )
}


