// Image.js
import React from 'react';
import product from './product';

function ImageUrl() {
return (
    <img src={product.imageUrl} alt="produit" className='Card.img' />
);
}

export default ImageUrl;
