import React from 'react'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import './Product.css'

const Product = () => {
  return (
    <div className='product'>
        <ProductImage />
        <ProductInfo />
    </div>
  ) 
}

export default Product