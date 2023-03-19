import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    const { id, name, img, price, seller, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><>Seller: {seller}</></p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                Add to Cart  <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;