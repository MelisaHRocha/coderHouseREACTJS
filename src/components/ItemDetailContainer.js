import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { products } from "./data/products"
import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const {id : itemId} = useParams()
    const [item,setItem] = useState({})

    useEffect(() => {
       getItemDetail().then( response =>
        {
            setItem(response)
            console.log(response)
        }
       )
    }, [])

    const getItemDetail = () => {
        return new Promise((resolve)=>{
                resolve( products.find(p => p.id === Number(itemId)))
        })
    }
    


  return (

    <ItemDetail item={item}/>
    
  )
}
export default ItemDetailContainer