import { createContext, useState } from "react";

const CartContext = createContext([])

const CartProvider = ({children}) => {

    const [itemsCart,setItemsCart] = useState([])

    const addItem = (item) => {
        setItemsCart( itemsCart => itemsCart.concat(item))
    }

    const context = {
        itemsCart,
        addItem
    }
    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}