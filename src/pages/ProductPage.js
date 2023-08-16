import React, { useEffect, useState } from "react";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoadingSpinner from "../components/LoadingSpinner";
import ProductList from "../components/ProductList";
import FilterComponent from "../components/FilterComponent";

function ProductPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const allProducts = useSelector((state) => state.products.productList);
  const productsObject = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchProducts, setSearchProducts] = useState(allProducts);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.price >= minValue && product.price <= maxValue
    );
    setFilteredProducts(filtered);
    setSearchProducts(filtered);
  }, [minValue, maxValue, allProducts]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchItem(value);

    if (value !== "") {
      const filtered = filteredProducts.filter((p) => p.title.includes(value));
      setSearchProducts(filtered);
    } else {
      setSearchProducts(filteredProducts);
    }
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex justify-between">
        <h1 className="mb-4 text-2xl font-semibold">Products Page</h1>
        <div className="relative my-2 mr-6">
          <input
            type="search"
            className="px-4 py-1 border-0 rounded shadow bg-purple-white"
            placeholder="Search by name..."
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
        <div>
          <FilterComponent
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
          />
        </div>
        <br />
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </Link>
        <Link to="/order">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>
        </Link>
      </div>
      <br />
      <br />
      {productsObject.error !== "" ? (
        <h1>{productsObject.error}</h1>
      ) : productsObject.isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductList products={searchProducts} />
      )}
    </div>
  );
}

export default ProductPage;
