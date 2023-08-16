import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.push({ ...action.payload, quantity: 1 }); // Use push instead of reassigning the state
    },
    removeFromCart: (state, action) => {
      return state.filter((cartItem) => cartItem.id !== action.payload); // Return the filtered array
    },
    incQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incQuantity,
  decQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
