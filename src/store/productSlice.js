import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    try {
      // setTimeout(async () => {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data["products"];
      // }, 3000);
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.productList = action.payload;
    },
    deleteProduct: (state, action) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  // pending , fullfilled, rejected
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.productList = action.payload;
    },
    [fetchProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.productList = [];
      state.error = "";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.productList = [];
      state.error = action.payload;
    },
  },
});

export const { setProducts, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
