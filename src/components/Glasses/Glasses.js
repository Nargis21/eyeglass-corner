import React from 'react';
import './Glasses.css'
const Glasses = ({ details }) => {
    return (
        <div className='glasses-container'>
            <img src={details.image} alt="" />
            <h4>{details.name}</h4>
        </div>
    );
};

export default Glasses;