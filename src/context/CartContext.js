import { createContext, useState } from "react";

const CartContext = createContext([])

const CartProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useState([])
 //   const [total,setTotal] = useState(0)

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
    }
    
    const getTotal = () => {
        const quantitys = itemsCart.map(ic => ic.quantity)
        const total = quantitys.reduce((total, cant) => total + cant, 0 )
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
        getTotal
    }

    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}