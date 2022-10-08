import React, { useState } from "react";
import "./Order.css";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const { products, storedCart } = useLoaderData();
  const [cart, setCart] = useState(storedCart);

  const handleRemoveItem = id => {
    const itemsLeft = cart.filter(product => product.id !== id);

    setCart(itemsLeft);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="items-container">
        {cart.map(product => (
          <ReviewItem
            key={product.id}
            product={product}
            deleteHandler={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
