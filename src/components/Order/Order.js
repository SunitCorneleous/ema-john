import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const { products, storedCart } = useLoaderData();
  const [cart, setCart] = useState(storedCart);

  return (
    <div className="shop-container">
      <div className="items-container">
        {cart.map(product => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
