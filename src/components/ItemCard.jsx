import { useState, useContext } from "react"
import { CartContext } from "../cart-context.jsx"
import React from "react"

function ItemCard({ id, name, price, imageUrl }) {
    const { addToCart } = useContext(CartContext)

    function handleAddToCart() {
        addToCart(id)
    }

    return (
        <div className='item-card'>
            <img src={imageUrl} width='200px' alt='' />
            <h2>{name}</h2>
            <p>£{price.toFixed(2)}</p>

            <button onClick={handleAddToCart}>
                {addToCart ? 'In cart' : 'Add to cart'}
            </button>
        </div>
    )
}

export default ItemCard

