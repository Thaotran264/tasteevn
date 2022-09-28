import { createSlice } from "@reduxjs/toolkit";
let auth;
let logged;
if (typeof window !== "undefined") {
  auth = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("userInfo")) : {};
  logged = localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged")) : false;
}
const setAuthFunc = (userInfo, isLogged) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  localStorage.setItem("isLogged", JSON.stringify(isLogged));
};
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: auth,
    isLogged: logged,
  },
  reducers: {
    logIn(state, action) {
      state.auth = action.payload
      state.isLogged = true
      setAuthFunc(state.auth, state.isLogged)
    },
    logout(state) {
      state.auth = null
      state.isLogged = false
      setAuthFunc(state.auth, state.isLogged)
    },
  },
});
export const selectAuth = (state) => state.auth;
export const { logIn, logout } = authSlice.actions;

export default authSlice.reducer;
