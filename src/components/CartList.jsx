import { useContext } from "react";
import { CartContext } from "../cart-context";
import ItemCard from "./ItemCard";

function CartList() {
    const { itemsInCart, setItemsInCart, calculateTotal } = useContext(CartContext)

    const handleCheckout = async () => {
        const order = {
            items: itemsInCart,
            total: calculateTotal
        }

        const response = await fetch('https://localhost:8080/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }
        )

        if (!response.ok) {
            throw new Error('Checkout failed')
        }

        setItemsInCart([]);
    }
    // loop around the itemsId collection from context
    // use getItemById to get items and push them onto the order_items
    // create order object that contains the order_items and the order_total
    // use fetch operation to POST the order to the db.json API

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

            <button onClick={handleCheckout}>
                Checkout
            </button>

        </>
    )
}

export default CartList