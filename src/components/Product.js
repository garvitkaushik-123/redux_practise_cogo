import React from "react";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-4 mb-4 transition duration-300 ease-in-out transform border rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain h-[100px] w-full"
        />
      </div>

      <h2 className="font-semibold text-md">{product.title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          className="px-2 py-2 mt-2 text-xs text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
