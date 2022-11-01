import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext([])

const CartProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useLocalStorage('itemsCart',[])
    const [confirmCartDelate,setConfirmCartDelate] = useState(false)
    const [differenceInDays, setDifferenceInDayas] = useState(0)
    const [existeReserva, setExisteReserva] = useState(false)

 
    const addItem = (item,counter) => {
        if (isInCart(item)){
            const itemEnc = itemsCart.find(ic=>ic.name===item.name)
            itemEnc.quantity += counter             
        } else {
            console.log("El item cart nuevo", item)
            item.quantity = counter
            setItemsCart(
            itemsCart => itemsCart.concat(item))
        }

        item.diasReserva = differenceInDays;
        setExisteReserva(true)
    }

    const getDifferenceDays = (dateIn, dateOut) => {
        var Difference_In_Time = dateOut.getTime() - dateIn.getTime();
        var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        setDifferenceInDayas(Difference_In_Days)
        return Difference_In_Days
    }

    const limpiarReserva = (item) =>{        
    const itemsCartRestantes = itemsCart.filter(it => it.id !== item.id)  
    setItemsCart(itemsCartRestantes)
    }

    const limpiarReservas = () =>{    
        Swal.fire({
            title: 'Vaciar carrito',
            text: "Estás seguro de que desea vaciar tu carrito?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Vació su carrito, continue con otra reserva',
                'success'
                ).then((result)=>{
                    if(result.isConfirmed){
                        setItemsCart([])
                        setConfirmCartDelate(true)
                        setExisteReserva(false)
                    }
                })             
                
                console.log("Confirm cart Delate",confirmCartDelate)
            }
          })
    }
    
    const getTotal = () => {
        const quantitys = itemsCart.map(ic => ic.quantity)
        const total = quantitys.reduce((total, cant) => total + cant, 0 )
        return total
    }
   
    const getCostoTotal = () =>{
        const subtotales = itemsCart.map(ic => ic.quantity*ic.price*ic.diasReserva)
        const total = subtotales.reduce((total, cant) => total + cant, 0 )
        return total
             
      }

    console.log( "Dentro de CartContext",itemsCart )

    const isInCart = (item) =>{
        return itemsCart.some(ic=>ic.name===item.name)
    }

    const context = {
        itemsCart,
        setItemsCart,
        addItem,
        limpiarReserva,
        limpiarReservas,
        confirmCartDelate,
        getTotal,
        getCostoTotal,
        getDifferenceDays,
        differenceInDays,
        existeReserva,
        setExisteReserva
    }

    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}