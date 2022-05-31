import React from 'react';

import { useResource } from './CustomHooks/useResource';

export const ProductInfo = ({ productId }) => {
    // LOAD product details from the server
    const product =useResource(`/products/${productId}`);

    const {name, price, description, rating} = product || {};

    return product ? (
        <>
         <h3>{name}</h3>
         <p>{price}</p>
         <h3>Description: </h3>
         <p>{description}</p>
         <p>Average Rating: {rating}</p>
        </>
    ): <p>Loading...</p>;
}