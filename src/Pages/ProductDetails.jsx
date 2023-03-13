import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Products.module.css'
const ProductDetails = (props) => {
    return ( 
        <div className="col-4 mb-5">
            <div className="card" style={{width: `18rem`}}>
            <img style={styles.img} src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-price">Price <span className='badge badge-primary'>{props.price}$</span></p>
                     <p className="card-desc">{props.desc}</p>
                    <Link style={styles.button} to={`/cart/${props.id}`} className="btn btn-primary text-center m-auto">Add To Cart</Link>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;