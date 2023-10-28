 import { useEffect, useState } from "react";
import  ItemList  from "../common/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import  {dataBase}  from "../../firebase/data";
 
 
 export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
    const categoria = useParams().categoria
    console.log('Categoria:', categoria);
    useEffect(() => {
      const productosFire = collection (dataBase, "products")
      const consulta = categoria ? query(productosFire, where("categoria", "==", categoria)) : productosFire

      getDocs(consulta)
        .then((response)=>{
          setProducts(
            response.docs.map((prod)=>{
              return {...prod.data(),id: prod.id}
            })
          )
        })
    }, [categoria])
    
    return (
      <div className="container-fluid">
        <h1 className="text-center">Productos</h1>
        <ItemList products = {products}/>
      </div>
    );

      }
  
 
  

 
  
  