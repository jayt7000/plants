import ItemCard from "../components/ItemCard"
import itemsData from '../data/itemsData'

function ProductsPage() {

    return (
        <>
        <h2>Our Plants</h2>
        <div className='items-grid'>
            {itemsData.map((item) => (
                <ItemCard
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                />
            ))}
        </div>

        </>
    )
}

export default ProductsPage


