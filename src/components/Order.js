import React, { useState } from 'react'
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore'
import {useContext} from "react"
import {CartContext} from "../context/CartContext"


const Order = () => {

  const {itemsCart} = useContext(CartContext);
  const [user, setUser] = useState({})
//  const items = [ 'iPhone', 'Samsung', 'Motorola' ] // Vienen de useContext()
  
  console.log("itemsCart", itemsCart)  //aca llega vacio


  const putOrder = () => {
    const order = {
      buyer: user,
      items: itemsCart,
      total: 2
    }
  
    console.log(order);
    }

    console.log("itemsCart", itemsCart)
   
  return (
    <div>
        <h1 className='text-5xl'>Orden</h1>
        {itemsCart.map((item, i)  => <li key={i}>{item}</li> )}
        <button className='btn' onClick={putOrder}>Levantar orden</button>
    </div>
  )
}

export default Order