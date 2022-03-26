import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Products = ({ product, addToCart }) => {
    const { name, price, image } = product
    return (
        <div className='product-cart'>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            <button onClick={() => addToCart(product)} className='cart-btn'>
                <h4 className='btn-text'>Add To Cart</h4>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;