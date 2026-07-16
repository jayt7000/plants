import ItemCard from "../components/ItemCard"
import itemsData from '../data/itemsData'

function ItemsList() {

    return (
        <>
            <h1>Our Plants</h1>
            <div className='items-grid'>
                {itemsData.map((item) => (
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

export default ItemsList