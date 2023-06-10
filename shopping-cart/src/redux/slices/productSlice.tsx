import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type/Type";
import { ToastContainer, toast } from "react-toastify";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as Product[],
    isLoading: false,
  },
  reducers: {
    getProducts: (state) => {
      state.isLoading = true;
    },
    getProductSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      //get success
    },
    getProductFailed: (state) => {
      state.isLoading = false;
    },
  },
});
export const { getProductFailed, getProducts, getProductSuccess } =
  productSlice.actions;

export default productSlice.reducer;
