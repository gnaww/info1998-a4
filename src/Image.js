import React from 'react';
import './App.css';
import pic from './pic.jpg';

const Image = prop => {
    return (
        <div>
            <h1>I LOVE CATS</h1>
            <img src={pic} alt="keyboard cat" />
        </div>
    );
}

export default Image;
