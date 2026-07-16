import CartList from "../components/CartList"
import ItemsList from "../components/ItemsList"
import { CartProvider } from "../cart-context"

function CheckoutPage() {

    return (
        <>
        <h1>Plants Check Out</h1>

        <CartProvider>
            <CartList />
        
        </CartProvider>
        </>
    )
}

export default CheckoutPage