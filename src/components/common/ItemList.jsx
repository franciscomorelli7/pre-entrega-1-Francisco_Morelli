import Item from "./Item"

function ItemList({products}) {
  
    return (
   <div className="row productos justify-content-center">
    {products.map((prod)=> <Item producto = {prod} key={prod.id}/>)}
   </div>
  )
}
export default ItemList

