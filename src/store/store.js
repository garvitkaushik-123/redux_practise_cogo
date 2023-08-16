import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cartItems: cartSlice,
    orderItems: orderSlice,
  },
});

export default store;
