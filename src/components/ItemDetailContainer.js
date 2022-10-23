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
       getItemDetail().then( response =>
        {
            setItem(response)
            console.log(response)
        }
       )
    }, [])*/


    useEffect(() => {
      getItemDetailF()
   }, [])

    const getItemDetail = () => {
        return new Promise((resolve)=>{
                resolve( products.find(p => p.id === Number(itemId)))
//                console.log("Entonces p", p.id)
                console.log("Entonces itemID", itemId)
        })
    }
    

    const getItemDetailF = () =>{
      const db = getFirestore()
      const itemsRef = collection(db, 'items')
      const docRef = doc(db,'items','IuinnxtMLJzzAE6PnTyJ');
      console.log("docRef", docRef.id)
      getDoc(docRef).then( res => {
        console.log("Entre a la query");
        console.log("Esto es resdocs",res.doc);
        const data = res.doc
        
            console.table(data);
          
    });


      const q =  query(itemsRef, where('id','!=','Room 1'))
      console.log("Esto es ref ", itemsRef)
      console.log("Esto es q", q )
      getDocs(q).then( res => {
          console.log("Entre a la query");
          console.log("Esto es resdocs",res.docs);
          const data = res.docs.map(e => ({id: e.id, ...e.data()}))
              console.table(data);
              setItem(data)
      });
    }
    

    const db = getFirestore()
      const itemsRef = collection(db, 'items')
    console.log("Entonces itemsRef", itemsRef)
    console.log("Entonces itemId",itemId)

  return (
    <ItemDetail item={item}/>   
  )
}
export default ItemDetailContainer