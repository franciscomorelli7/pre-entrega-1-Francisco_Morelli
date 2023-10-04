import { useEffect, useState} from "react"
import { getItemById } from "../../asyncMock"
import { ItemDetail } from "../common/ItemDetail"
import { useParams } from "react-router-dom"



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id
    
    useEffect(() => {
      getItemById(id)
        .then((res) => {
            setItem(res)
        })
    }, [id])
    
  return (
    <div className="container contenedor-detalles">
        {item &&< ItemDetail item = {item}/>}
    </div>
  )
}
