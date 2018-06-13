import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => (
  <div className="ProductItemContainer">
    <img src="http://via.placeholder.com/250x250" alt=""/>
    <h4>{product.name}</h4>
    <p>${product.price}</p>
  </div>
);

export default ProductItem;
