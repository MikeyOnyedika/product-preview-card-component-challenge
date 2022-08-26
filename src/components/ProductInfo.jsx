import React from 'react';
import CartIcon from '../images/icon-cart.svg';
import './ProductInfo.css';

const ProductInfo = () => {
  return (
    <div className="product-info">
      <p className="product-title">PERFUME</p>
      <h1 className="product-name">Gabrielle Essence Eau De Parfum</h1>
      <p className="product-description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="price">
        <h2 className="main-price">$149.99</h2>
        <p className="prev-price">$169.99</p>
      </div>
      <div className="add-to-cart-wrapper">
        <a href='#' className='btn'>
          <img src={CartIcon} alt="" />
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductInfo;
