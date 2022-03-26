import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const products = [
    { id: 1, name: 'MMF-18A-014', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 2, name: 'MMF-18A-099', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 3, name: 'MtF-17A-031', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 4, name: 'MMF-185-095', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 5, name: 'JINS-Switch-178', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 6, name: 'Classic-122', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 7, name: 'McF-15A-U029', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 8, name: 'MRF-185-158', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 9, name: 'MUF-15A-503', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 10, name: 'MMF-17S-191', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 11, name: 'MRF-15A-403', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 12, name: 'MRF-16A-U22B', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' }
]
const Shop = () => {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const removeToCart = () => {
        const newCart = [];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCart={addToCart}

                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeToCart={removeToCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;