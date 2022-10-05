import { createSlice } from "@reduxjs/toolkit";
let auth;
let logged;
let token;
if (typeof window !== "undefined") {
  auth = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {};
  token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";
  logged = localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged")) : false;
}
const setAuthFunc = (userInfo, isLogged, token) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("isLogged", JSON.stringify(isLogged));
};
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: auth,
    isLogged: logged,
    token
  },
  reducers: {
    logIn(state, action) {
      state.authData = action.payload
      state.isLogged = true
      state.token = action.payload.token
      setAuthFunc(state.authData, state.isLogged,state.token)
    },
    logout(state) {
      state.authData = null
      state.isLogged = false
      state.token = false
      setAuthFunc(state.authData, state.isLogged,state.token)
    },
  },
});
export const selectAuth = (state) => state.auth;
export const { logIn, logout } = authSlice.actions;

export default authSlice.reducer;
