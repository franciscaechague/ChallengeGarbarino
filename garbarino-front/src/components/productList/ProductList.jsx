import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ productList }) => (
  <div className="ProductListContainer">
    <div className="ProductListCardContainer">
      {productList.map(product =>
        <ProductItem product={product} />
      )}
      <div className="AddProductCard">
        <img src="/img/add-product.svg" alt=""/>
        <p> Agregar Producto </p>
      </div>
    </div>
  </div>
)

export default ProductList;
