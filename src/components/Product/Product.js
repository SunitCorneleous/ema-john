import React from "react";
import "./Product.css";

const Product = ({ product, handler }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product-container">
      <img src={img} alt="product" />
      <div className="product-info">
        <p className="product-title">Product name: {name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings}</small>
        </p>
      </div>
      <button className="btn-cart" onClick={() => handler(product)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
