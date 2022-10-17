import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import {products} from "./data/products"
import ItemCard from "./ItemCard";

const ItemListContainer = () => {
    
    const {id : itemId} = useParams()
    const [items, setItems] = useState([])

    console.log('ItemId es', itemId)

    useEffect(()=>{
        if(itemId){
            getProductsFilter().then( response =>{setItems(response)})
        }else{
        getProducts().then(response => setItems(response))}       
        
        },[itemId]);


     const getProducts = () => {
        return  new Promise((resolve,reject)=>{
                if( typeof itemId == "undefined"){               
                    resolve(products)
                    console.log('Productos NO  Filtrados', products)                   
                }               
               else{
                    reject(products)
                }       
      })
     }

     const getProductsFilter = () => {
        return  new Promise((resolve,reject)=>{
                if( typeof itemId !== "undefined"){               
                    resolve(products.filter(p => p.categoryId == Number(itemId)))
                    console.log('Productos Filtrados', products)                  
                }              
               else{
                    reject(products)
                  
                }       
      })
     }

  
   console.log('Productos Filtrados Saliendo    ', products);
   console.log('Items', items);

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