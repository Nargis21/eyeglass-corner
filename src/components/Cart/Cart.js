
import { useState } from 'react';
import Glass from '../Glass/Glass';
import './Cart.css'
const Cart = ({ cart, removeToCart }) => {
    const [glass, setGlass] = useState([])
    const chooseAnyOne = (product) => {
        const selectGlass = (product[Math.floor(Math.random() * product.length)])
        setGlass(selectGlass)
    }
    // // const [glasses,setGlasses]=useState([])
    // // const removeSelection=(product)=>{

    // }
    let product = []
    for (const glass of cart) {
        product = [...product, glass]
    }
    return (
        <div>
            <h2>Selected Glasses</h2>
            {
                product.map(details => <p key={details.id}>{details.name}</p>)
            }
            <button onClick={() => chooseAnyOne(product)} className='choose-btn'><h4>Choose 1 for me</h4></button>
            <button onClick={() => removeToCart()} className='choose-btn'><h4>Choose Again</h4></button>
            <Glass glass={glass}></Glass>
        </div>
    );
};

export default Cart;