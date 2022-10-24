import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import {products} from "./data/products"
import ItemCard from "./ItemCard";
import { collection, doc, getDoc, getDocs, getFirestore, query, where, db } from "firebase/firestore";

const ItemListContainer = () => {
    
    const {id : itemId} = useParams()
    const [items, setItems] = useState([])

    useEffect(()=>{
        if(itemId){
 //           getProductsFilter().then( response =>{setItems(response)})
         getProductsFilter()
        }else{
//        getProducts().then(response => setItems(response))}       
          getItems()}    
        },[itemId]);


 /*   const getProducts = () => {
        return  new Promise((resolve,reject)=>{
            if( typeof itemId == "undefined"){               
                resolve(products)
                console.log('Productos NO  Filtrados', products)                   
            }               
            else{
                reject(products)
            }       
      })
    }*/


    const getItems = () => { 
        const db = getFirestore()
        const itemsRef = collection(db, 'items')


            getDocs(itemsRef).then( res => {
                console.log(res);
                const data = res.docs.map(e => ({id: e.id, ...e.data()}))
     //               console.log(data);
                    setItems(data)
            });

      
    }

    console.log("Items", items)

     /*const getProductsFilter = () => {
        return  new Promise((resolve,reject)=>{
            if( typeof itemId !== "undefined"){               
                resolve(products.filter(p => p.categoryId == Number(itemId)))
                console.log('Productos Filtrados', products)                  
            }              
            else{
                reject(products)                
            }       
      })
     } */
    

     const getProductsFilter = () => {
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
 //       console.log("Esto es ref ", itemsRef)
        const q =  query(itemsRef, where('categoryId', '==', itemId))
        getDocs(q).then( res => {
            console.log(res);
            const data = res.docs.map(e => ({id: e.id, ...e.data()}))
                console.table(data);
                setItems(data)
        });
     }

    return (
        <div>
            <div className="p-4 flex justify-center ...">
                <p className="Intro">Habitaciones</p>
            </div>
            <div className="flex justify-center ...">
            <div className="grid grid-cols-3 gap-8">
            {items.map(item =><ItemCard key={item.id} {...item}/>)}
            </div>
            </div>
        </div>
    )
}
export default ItemListContainer