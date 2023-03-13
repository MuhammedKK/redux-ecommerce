import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Products.module.css'

const CartItem = ({id, name, price, desc, img}) => {
    return ( 
        <div className="col-4 mb-5">
            <div className="card" style={{width: `18rem`}}>
            <img style={styles.img} src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-price">Price <span className='badge badge-primary'>{price}$</span></p>
                     <p className="card-desc">{desc}</p>
                    <Link style={styles.button} to={`/cart/${id}`} className="btn btn-primary text-center m-auto">Add To Cart</Link>
                </div>
            </div>
        </div>
     );
}
 
export default CartItem;