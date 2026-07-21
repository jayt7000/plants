import React, { createContext, useState } from 'react'
import itemsData from './data/itemsData'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([])

    function addToCart(itemId) {
        const item = itemsData.find((item) => item.id === itemId)
        setItemsInCart((prev) => [...prev, item])
    }

    function removeFromCart(itemId) {
        setItemsInCart((prev) => prev.filter((item) => item.id !== itemId))
    }

    function calculateTotal(itemId) {
        return (
            itemsInCart.reduce((total, item) => total + item.price, 0)
        );
    }

    const contextValue = {
        itemsInCart,
        addToCart,
        removeFromCart,
        calculateTotal,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
