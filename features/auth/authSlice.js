import { createSlice } from "@reduxjs/toolkit";
let auth;
let logged;
let token;
if (typeof window !== "undefined") {
  auth = sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")) : {};
  token = sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : "";
  logged = sessionStorage.getItem("isLogged") ? JSON.parse(sessionStorage.getItem("isLogged")) : false;
}
const setAuthFunc = (userInfo, isLogged, token) => {
  sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  sessionStorage.setItem("token", JSON.stringify(token));
  sessionStorage.setItem("isLogged", JSON.stringify(isLogged));
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
