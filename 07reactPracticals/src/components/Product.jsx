function Product ({ name, price, category }) {
    return (
        <>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
        </>
    )
}

export default Product