import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { products } from "./data/products"
import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {

    const {id : itemId} = useParams()
    const [item,setItem] = useState({})
   
/*    useEffect(() => {
       getItemDetailOld().then( response =>
        {
            setItem(response)
            console.log(response)
        }
       )
    }, [])*/


    useEffect(() => {
      getItemDetail()
   }, [])

    const getItemDetailOld = () => {
        return new Promise((resolve)=>{
                resolve( products.find(p => p.id === Number(itemId)))
                console.log("Entonces itemID", itemId)
        })
    }
    

    const getItemDetail = () =>{
      const db = getFirestore()
      const queryRef = doc(db, "items", itemId);
      getDoc(queryRef).then( res => {
          const data = {id: res.id, ...res.data()}
              console.table(data);
              setItem(data)
      });
    }
    
  return (
    <ItemDetail item={item}/>   
  )
}
export default ItemDetailContainer