import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
