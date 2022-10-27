import React, { useState } from 'react'
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore'
import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import UserForm from './UserForm'
import Swal from 'sweetalert2'


const Order = () => {

  const {itemsCart} = useContext(CartContext);
  const [user, setUser] = useState({})
//  const items = [ 'iPhone', 'Samsung', 'Motorola' ] // Vienen de useContext()
  
  console.log("itemsCart", itemsCart)  //aca llega vacio

  const putOrder = () => {
 //   const user = {name: 'Luis x', phone: '564654', email:'luis@gmail.com'}

    const order = {
      buyer: user,
      items: itemsCart,
      total: 2
    }

    console.log(order);
  
    const db = getFirestore()

    const ordersCollection = collection(db, 'orders')
    addDoc( ordersCollection, order ).then( ({id}) => {
        console.log( id );
      //  alert( id )
    }) 

    Swal.fire({
        icon: 'success',
        title: 'Compra Realizada!',
        timer: 1500,
        text: 'Ya tiene su reserva confirmada.',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/compartido1.jpg?alt=media&token=ddbde122-0309-43e4-90ca-8ab7c32fe5c6',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
      })

    }

    console.log("itemsCart", itemsCart)

    const modifyOrder= () => {
    
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    const orderDoc = doc (ordersCollection, 'MRWtnEFkMkEHCNhBKtna')
    updateDoc(orderDoc, {total:5})

    }

   
  return (
    <div>
      
      <div className="p-4 flex justify-center ..."> 
      <div className="card card-compact w-96 bg-base-100">
        <div className="p-5"><h1 className='text-2xl'>Checkout</h1></div>
        <div>{itemsCart.map((item, i)  => <li key={i}>{item.name}</li> )}</div>
        <UserForm setUser={setUser} OnOrder={putOrder}/>
      </div>
      </div> 
    </div>
  )
}

export default Order