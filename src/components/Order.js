import React, { useState } from 'react'
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore'
import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import UserForm from './UserForm'
import Swal from 'sweetalert2'
import PurchaseDetail from './PurchaseDetail'

const Order = () => {

  const {itemsCart, getCostoTotal, differenceInDays} = useContext(CartContext);
  const [user, setUser] = useState({})
  const [orderLoad, setOrderLoad] = useState(false)
  const [id, setId] = useState('')
  
  console.log("itemsCart", itemsCart)  //aca llega vacio

  const order = {
    buyer: user,
    items: itemsCart,
    total: getCostoTotal()
  }
  
  const putOrder = () => {

    const db = getFirestore()
   
    const ordersCollection = collection(db, 'orders')
    addDoc( ordersCollection, order ).then( res => {
        console.log( res.id );
        setId(res.id)
      //  alert( id )
    }) 

    console.log("Order componente.", order);

    Swal.fire({
        icon: 'success',
        title: 'Compra Realizada!',
        text: 'Ya tiene su reserva confirmada.',
      }).then((result)=>{
        if (result.isConfirmed) {          
           console.log("Entre aca purchase")        
           setOrderLoad(true)          
        }
      })
      
    }

    console.log("itemsCart", itemsCart)

    const modifyOrder= () => {   
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    const orderDoc = doc (ordersCollection, 'MRWtnEFkMkEHCNhBKtna')
    updateDoc(orderDoc, {total:5})
    }

    console.log("Id order", id)

    return (
      <div>     
        <div className="p-6 flex justify-center ...">        
        <div className="card card-compact w-96 bg-base-100">       
          {orderLoad ? <PurchaseDetail order={order} idSeguimiento={id}/>  : <div> 
          <div className="flex flex-col ...">          
          <div className="ml-20 mt-15"><h1 className='Intro'>Checkout</h1></div> 
          <div className="ml-15 mt-15" style={{color: 'green', fontSize: '14px'}}><h1>Complete sus datos personales para completar la reserva.</h1></div> 
          </div>
          <UserForm setUser={setUser} OnOrder={putOrder}/></div>}    
        </div>
        </div> 
      </div>
    )
}

export default Order