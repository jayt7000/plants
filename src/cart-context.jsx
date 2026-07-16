import React, { createContext, useState } from 'react'
import itemsData from './data/itemsData'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([])
    const [itemTotal, setItemTotal] = useState(0);

    function addToCart(itemId) {
        const item = itemsData.find((item) => item.id === itemId)
        setItemsInCart((prev) => [...prev, item])
    }

    function removeFromCart(itemId) {
        setItemsInCart((prev) => prev.filter((item) => item.id !== itemId))
    }

    function calculateTotal(itemId) {
        const item = itemsData.find((item) => item.id === itemId)
        setItemTotal((prev) => prev + item.price)
    }

    const contextValue = {
        itemsInCart,
        itemTotal,
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
