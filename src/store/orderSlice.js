import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addToOrder: (state, action) => {
      console.log("add to order", action.payload);
      state.push(action.payload);
    },
  },
});

export const { addToOrder } = orderSlice.actions;
export default orderSlice.reducer;
