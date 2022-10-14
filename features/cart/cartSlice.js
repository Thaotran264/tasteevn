import { createSlice } from "@reduxjs/toolkit";
let totalAmount;
let totalQuantity;
let items;
if (typeof window !== "undefined") {
  // Perform localStorage action
  totalAmount = localStorage.getItem("totalAmount")
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
  totalQuantity = localStorage.getItem("totalQuantity")
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;
  items = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
}
const setItemFunc = (itemsList, totalQuantity, totalAmount) => {
  localStorage.setItem("cartItems", JSON.stringify(itemsList));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
  },
  reducers: {
    addToCart(state, action) {
      const id = action.payload.itemId;
      const existingItem = state.itemList.find((item) => item.itemId == id);

      if(!existingItem) {
        state.itemList.push({
              ...action.payload,
            });
      } else {
        existingItem.quantity += action.payload.quantity
        if(existingItem.note != action.payload.note) {
          state.itemList.push({
            ...action.payload,
          });
        }
      }
      // else {
      //   if(existingItem.)
      // }
      // if (existingItem) {
      //   existingItem.quantity++;
      //   existingItem.totalPrice += newItem.price;
      // } else {
      //   state.itemList.push({
      //     ...newItem,
      //   });
      // }
      state.totalQuantity+= action.payload.quantity;
      setItemFunc(state.itemList, state.totalQuantity, state.totalAmount);
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const exisItem = state.itemList.find(item => item.itemId == id)
      if (exisItem && exisItem.quantity > 1) {
        exisItem.quantity--;
      }
      else {
        state.itemList = state.itemList.filter((item) => item.itemId !== id);
      }

      state.totalQuantity--;
      setItemFunc(state.itemList, state.totalQuantity, state.totalAmount);
    },
    clearCart(state) {
      state.itemList = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      setItemFunc(state.itemList, state.totalQuantity, state.totalAmount);
    },
  },
});
export const selectCart = (state) => state.cart.itemList;
export const totalQuantityCart = (state) => state.cart.totalQuantity;
export const totalCartAmount = (state) => state.cart.totalAmount;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
