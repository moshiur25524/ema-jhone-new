import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;

    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>total price: {total}</p>
            <p>total shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;