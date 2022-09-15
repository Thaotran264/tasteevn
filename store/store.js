import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import notifyReducer from '../features/notify/notifySlice'
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notify: notifyReducer,
    auth: authReducer
  },
})