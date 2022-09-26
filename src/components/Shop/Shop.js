import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  return (
    <div className="shop-container">
      {/* products */}
      <div className="products-container">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handler={addToCart}
          ></Product>
        ))}
      </div>
      {/* cart */}
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Products added: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
