import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import store from '../store';
import CartItem from './CartItem';



const Cart = (props) => {
    // const [cart, setCart] = useState([]);
    const {id} = useParams();
    const [cart, setCart] = useState([]);

    // get the product
    const pro = props.products.filter(pro => pro.id == id)[0]
    
    // set product to the cart
    useEffect(() => {
        if(pro) {
            store.dispatch({
                type:"ADD_TO_CART",
                payload: pro
            })
        }
        setCart(store.getState().cartReducer.cart);
    }, [pro])

    // console.log(cart);
    // add the acrt to the store
    console.log(cart)
    return (
        // Cart Details3
        <div className="row">
            {cart.map(item => (
                <CartItem key={item.id} id={item.id} price={item.price} name={item.name} desc={item.desc} img={item.img} />
            ))}            
        </div>
        
    );
}
export default Cart;