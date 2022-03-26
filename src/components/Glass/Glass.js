import React from 'react';
import './Glass.css'
const Glass = ({ glass }) => {
    const { image, name, price } = glass
    return (
        <div className='glass-container'>
            <h2>Best For You</h2>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h3>${price}</h3>
        </div >
    );
};

export default Glass;