import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const products = [
    { id: 1, name: 'MMF-18A-014', price: 699, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-014_189_01.jpg' },
    { id: 2, name: 'MMF-18A-099', price: 899, image: 'https://www.jins.com/us/media/catalog/product/M/M/MMF-18A-068_196_02.jpg' },
    { id: 3, name: 'MTF-17A-031', price: 999, image: 'https://www.jins.com/us/media/catalog/product/cache/23f6f3cd0ef7990791de0efccb5b2ebd/M/T/MTF-17A-031_58_01.jpg' },
    { id: 4, name: 'MMF-185-095', price: 450, image: 'https://www.jins.com/us/media/catalog/product/cache/23f6f3cd0ef7990791de0efccb5b2ebd/M/M/MMF-18S-095_95_01.jpg' },
    { id: 5, name: 'JINS-Switch-178', price: 599, image: 'https://www.jins.com/us/media/catalog/product/cache/23f6f3cd0ef7990791de0efccb5b2ebd/M/M/MMF-17S-U178_95_01.jpg' },
    { id: 6, name: 'Classic-122', price: 699, image: 'https://i.pinimg.com/736x/ee/5f/4e/ee5f4e7fa40a510e46d6e0fdec4cabda.jpg' },
    { id: 7, name: 'MCF-15A-U029', price: 750, image: 'https://www.jins.com/us/media/catalog/product/cache/23f6f3cd0ef7990791de0efccb5b2ebd/M/C/MCF-15A-U030_54_02.jpg' },
    { id: 8, name: 'MRF-185-158', price: 899, image: 'https://www.jins.com/us/media/catalog/product/M/R/MRF-18S-157_58D_02.jpg' },
    { id: 9, name: 'MUF-15A-503', price: 699, image: 'https://www.jins.com/us/media/catalog/product/cache/23f6f3cd0ef7990791de0efccb5b2ebd/M/U/MUF-15A-503_94_01.jpg' },
    { id: 10, name: 'MMF-17S-191', price: 499, image: 'https://www.jins.com/us/media/catalog/product/cache/9fdf645bf4a37accec289086edc97b13/M/M/MMF-17S-245_86_01.jpg' },
    { id: 11, name: 'MRF-15A-403', price: 999, image: 'https://www.jins.com/us/media/catalog/product/cache/23f6f3cd0ef7990791de0efccb5b2ebd/M/R/MRF-15A-404_94_01.jpg' },
    { id: 12, name: 'MRF-16A-U22B', price: 899, image: 'https://www.jins.com/us/media/catalog/product/cache/23f6f3cd0ef7990791de0efccb5b2ebd/M/R/MRF-16A-U486_58_02.jpg' }
]
const Shop = () => {
    const [cart, setCart] = useState([])
    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            newCart = [...cart, selectedProduct]
            if (newCart.length <= 4) {
                setCart(newCart)
            }
        }
        else {
            return
        }
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