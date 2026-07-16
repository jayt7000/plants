import { useContext } from "react";
import { CartContext } from "../cart-context";
import ItemCard from "./ItemCard";

function CartList() {
    const { itemsInCart, calculateTotal } = useContext(CartContext)

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

            <h2>Total Price: £{calculateTotal().toFixed(2)}</h2>

        </>
    )
}

export default CartList