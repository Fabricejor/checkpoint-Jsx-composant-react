// Name.js
import React from 'react';
import product from './product';

function Name({ nom }) {
    return (
        <h2>Nom du produit : {product.nom}</h2>
);
}

export default Name;
