import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemm, Product } from "../../type/Type";
import { ToastContainer, toast } from "react-toastify";

interface CartState {
  items: CartItemm[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemm>) => {
      const { product, quantity } = action.payload;
      const { productId } = product;
      const itemInCart = state.items.find(
        (item) => item.product.productId === productId
      );
      if (itemInCart) {
        itemInCart.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const index = state.items.findIndex(
        (item) => item.product.productId === productId
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product.productId === action.payload
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product.productId === action.payload
      );
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
