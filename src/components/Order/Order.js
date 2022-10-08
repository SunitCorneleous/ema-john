import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const { products, storedCart: cart } = useLoaderData();

  return (
    <div>
      <h2>Total products: {products.length}</h2>
      <h2>Total products: {cart.length}</h2>
    </div>
  );
};

export default Order;
