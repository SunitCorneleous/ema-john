import React from "react";
import "./Product.css";

const Product = props => {
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-title">Product name: {name}</p>
        <p>Price: {price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings}</small>
        </p>
      </div>
      <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
