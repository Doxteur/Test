import React, { useEffect, useState } from 'react'
import Product from './Product'
import Form from "../components/Form";


function ProductsList() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [name, setName] = useState('')


    async function getProducts() {
        const response = await fetch('http://localhost:5000/');
        const data = await response.json();
        setProducts(data)
    }

    useEffect(()=>{
        setFilteredProducts(products)
    },[products])

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        const filteredProductsList = products.filter((product) => {
            return product.name.toLowerCase().includes(name.toLowerCase())
        })
        setFilteredProducts(filteredProductsList)
    }, [name])

    const productsList = filteredProducts.map((product) => {
        return <Product key={product.id} product={product} />
    })

    return (
        <>
            <Form name={name} setName={setName} />
            <div className="grid grid-cols-4 gap-10 mx-10 mt-4">
                {productsList}
            </div>
        </>
    )
}

export default ProductsList