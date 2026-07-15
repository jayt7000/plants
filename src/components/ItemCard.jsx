function ItemCard({name, price, imageUrl}) {
    return (
        <div className='item-card'>
            <img src={imageUrl} width='100px' alt='' />
            <h1>{name}</h1>
            <h2>{price}</h2>

            <button>Add to cart</button>
        </div>
    )
}

export default ItemCard