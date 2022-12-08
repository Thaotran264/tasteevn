import { createSlice } from "@reduxjs/toolkit";

function getAuth() {
    if (typeof window !== "undefined") {
        let auth = sessionStorage.getItem('userInfo')
        return eval(JSON.parse(auth || "") )
    }
}
function getToken() {
    if (typeof window !== "undefined") {
        let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
        return eval(token || '')
    }
}
function getLogged() {
    if (typeof window !== "undefined") {
        let logged = sessionStorage.getItem('isLogged') ? sessionStorage.getItem('isLogged') : ''
        return eval(logged || '')
    }
}

const setAuthFunc = (userInfo, isLogged, token) => {
  sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  sessionStorage.setItem("token", JSON.stringify(token));
  sessionStorage.setItem("isLogged", JSON.stringify(isLogged));
};
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: {},
    isLogged: false,
    token: ''
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
