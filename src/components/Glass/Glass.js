import React from 'react';
import './Glass.css'
const Glass = ({ glass }) => {
    return (
        <div className='glass-container'>
            <h2>Best For You</h2>
            <img src={glass.image} alt="" />
            <h3>{glass.name}</h3>
            <h3>${glass.price}</h3>
        </div >
    );
};

export default Glass;