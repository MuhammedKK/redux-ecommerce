import React, {useState, useEffect} from 'react'
import ProductDetails from './ProductDetails';
import pro from '../api/products.json'


// get The Products Method
const getAllProducts = () => {
    return Promise.resolve(pro);
}



const Products = () => {
    // This The State 
    const [products, setProducts] = useState([]);


    // fetch The Data From The Json File
    useEffect(() => {
        getAllProducts().then(data=>{
            setProducts(data);
            // console.log(products);
        })
    }, [])

    console.log(products)

    return ( 
        <div className="row mt-5 mb-5">
            {products.map(product => (
                <ProductDetails key={product.id} id={product.id} name={product.name} price={product.price} img={product.image} desc={product.description} />
            ))}
            {/* <ProductDetails name="cat1" price="100$" desc="lorem Epthom" />
            <ProductDetails name="cat2" price="150$" desc="lorem Epthom"/>
            <ProductDetails name="cat3" price="200$" desc="lorem Epthom"/> */}
        </div>
    );
}
 
export default Products;