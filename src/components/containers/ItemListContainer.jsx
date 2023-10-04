 import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock"
import  ItemList  from "../common/ItemList";
import { useParams } from "react-router-dom";
 
 
 export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
    const categoria = useParams().categoria
    
    useEffect(() => {
      getProducts()
        .then((res) =>{
          if(categoria){
            setProducts(res.filter((product)=>product.categoria===categoria))
          }else{
            setProducts(res)
          }
        })
    }, [categoria])
    
  
  return (
      <div className="container-fluid">
        <h1 className="text-center">Productos</h1>
        <ItemList products = {products}/>
      </div>
    );
  }

 
  
  