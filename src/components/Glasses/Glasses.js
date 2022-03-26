import React from 'react';
import './Glasses.css'
const Glasses = ({ details }) => {
    const { image, name } = details
    return (
        <div className='glasses-container'>
            <img src={image} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Glasses;