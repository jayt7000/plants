import { useContext } from "react";
import { CartContext } from "../cart-context";
import ItemCard from "./ItemCard";

function CartList() {
    const { itemsInCart, itemTotal, calculateItemTotal } = useContext(CartContext)

    const isInCart = itemsInCart.some(item => item.id === id)

    function handleCartTotal(){
        calculateItemTotal(id)
    }

    return (
        <>
            <h2>Cart</h2>
            <div className='items-grid'>
                {itemsInCart.map((item) => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
            
            <h2>Total Price: {calculateItemTotal()}</h2>
            
        </>
    )
}

export default CartList