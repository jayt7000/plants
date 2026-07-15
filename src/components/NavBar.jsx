import { Link } from 'react-router'

function NavBar() {
    return (
        <nav>

            <h1>seed theory</h1>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='shop'>Shop</Link>
                </li>
                <li>
                    <Link to='checkout'>Checkout</Link>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar