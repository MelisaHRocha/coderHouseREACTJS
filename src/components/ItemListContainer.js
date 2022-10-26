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
                setItems(data)
            });     
    }

    const getItemsCarrusel = () => {
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
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/Carrusel%2F1.png?alt=media&token=73e5dec6-e404-4c50-8e39-61e970dff19b" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/Carrusel%2F4.png?alt=media&token=ef151c43-cfb0-40e6-8c10-345ec3beb408" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/Carrusel%2F3.png?alt=media&token=d6c5bb34-f67d-42fd-9c15-080d73c7d184" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/Carrusel%2F2.png?alt=media&token=59b782ae-aa88-4bc2-abea-b032608bea2e" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="p-4 flex justify-center ...">
                <p className="Intro">Disponibilidad</p>
            </div>
            <div className="flex justify-center ...">
            <div className="grid grid-cols-3 gap-8 pb-20">
            {items.map(item =><ItemCard key={item.id} {...item}/>)}
            </div>
            </div>
        </div>
    )
}
export default ItemListContainer