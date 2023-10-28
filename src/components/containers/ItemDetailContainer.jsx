import { useEffect, useState} from "react"

import { ItemDetail } from "../common/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { dataBase } from "../../firebase/data"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id
    
    useEffect(() => {
      const docCall = doc(dataBase, "products", id)
      getDoc(docCall)
        .then((response)=>{
          setItem(
            {...response.data(), id: response.id}
          )
        })
    }, [id])
    
  return (
    <div className="container contenedor-detalles">
        {item &&< ItemDetail item = {item}/>}
    </div>
  )
}
