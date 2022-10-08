import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const products = useLoaderData();

  return (
    <div>
      <h2>Total products: {products.length}</h2>
    </div>
  );
};

export default Order;
