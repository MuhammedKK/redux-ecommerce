import React, {useState, useEffect} from 'react'
import ProductDetails from './ProductDetails';

const Products = (props) => {

    const products = props.products;

    return ( 
        <div className="row mt-5 mb-5">
             {products.map(product => (
                <ProductDetails key={product.id} id={product.id} name={product.name} price={product.price} img={product.image} desc={product.description} />
            ))}

        </div>
    );
}
 
export default Products;