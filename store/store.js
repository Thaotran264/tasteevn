import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import notifyReducer from '../features/notify/notifySlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notify: notifyReducer
  },
})