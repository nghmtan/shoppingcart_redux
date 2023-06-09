import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Add item to cart state
    },
    removeFromCart: (state, action) => {
      // Remove item from cart state
    },
    updateQuantity: (state, action) => {
      // Update quantity of an item in cart state
    },
  },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
