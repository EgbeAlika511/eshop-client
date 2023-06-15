import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (i) => i._id === action.payload._id
      );
      if (productIndex >= 0) {
        state.quantity += 1;
        state.products[productIndex].quantity += 1;
        // state.total += action.payload.price * action.payload.quantity;
      } else {
        const temProduct = { ...action.payload, quantity: 1 };
        state.products.push(temProduct);
      }
    },

    removeProduct: (state, action) => {
      const filterProduct = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.products = filterProduct;
    },

    decreaseProductQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (i) => i._id === action.payload._id
      );

      if (state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity -= 1;
      } else if (state.products[productIndex].quantity === 1) {
        const temProduct = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.products = temProduct;
      }
    },
  },
});

export const { addProduct, removeProduct, decreaseProductQuantity, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
