import { createSlice } from "@reduxjs/toolkit";
let auth;
if (typeof window !== "undefined") {
  auth = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {};
}
const setAuthFunc = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: auth,
    isLogged: false,
  },
  reducers: {
    login (state, action) {
      state.auth = action.payload,
      state.isLogged = true
      setAuthFunc(state.auth)
    },
    logout (state, action) {
      state.auth = action.payload,
      state.isLogged = false
      setAuthFunc(state.auth)
    },
  },
});
export const selectAuth = (state) => state.auth.auth;
export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
