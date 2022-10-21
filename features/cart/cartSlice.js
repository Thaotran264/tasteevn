import { createSlice } from "@reduxjs/toolkit";

function getTotalAmount() {
  if (typeof window !== "undefined") {
    let totalAmount = sessionStorage.getItem('totalAmount')
    return eval(JSON.parse(totalAmount) || 0)
  }
}
function getTotalQuantity() {
  if (typeof window !== "undefined") {
    let totalQuantity = sessionStorage.getItem('totalQuantity')
    return eval(JSON.parse(totalQuantity) || 0)
  }
}
function getItems() {
  if (typeof window !== "undefined") {
    let items = sessionStorage.getItem('cartItems')
    return eval(JSON.parse(items) || [])
  }
}

const setItemFunc = (itemsList, totalQuantity, totalAmount) => {
  sessionStorage.setItem("cartItems", JSON.stringify(itemsList));
  sessionStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  sessionStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: getItems(),
    totalQuantity: getTotalQuantity(),
    totalAmount: getTotalAmount(),
  },
  reducers: {
    addToCart(state, action) {
      const id = action.payload.itemId;
      const existingItem = state.itemList.find((item) => item.itemId == id);

      if (!existingItem) {
        state.itemList.push({
          ...action.payload,
        });
      } else {
        //
        // th1: đã tồn tại 1 sp và chưa có note
        //th2: đã tồn tại sp và có note trùng với sp mới
        //th3: chưa có note và có topppings
        //th4: có note và có topping
        //cà phê: 
        //cà phê 1: có topping 100% đường, đá 30%
        // cà phê 2: topping 50% đường, đá 50%
        //  ==> thêm cà phê 3: toppong 70% đường, đá 30%

        // thêm cà phê mới: kiểm tra cà phê đã tồn tại trong list chưa => [cà phê 1, cà phê 2]
        // thêm vào list và tăng số lượng sản phẩm
        // if (existingItem.note != action.payload.note) {
          state.itemList.push({
            ...action.payload,
          });
        // }
        // else {
        //   existingItem.quantity += action.payload.quantity
        // }
      }
      state.totalQuantity += action.payload.quantity;
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
