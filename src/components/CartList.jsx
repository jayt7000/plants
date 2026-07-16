import { useContext } from "react";
import { CartContext } from "../cart-context";

function CartList() {
    const {itemsInCart} = useContext(CartContext)

    return (
        <>
        <h2>Cart</h2>
        <div className='cart-wrapper'>
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
        </>
    )
}

export default CartList