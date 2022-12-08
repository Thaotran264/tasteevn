import { createContext, useEffect, useReducer } from "react";
import GetCookie from "../hooks/getCookies";
import { reducers } from "./reducers";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
        auth: {},
        notify: {}
    };
    const [state, dispatch] = useReducer(reducers, initialState);
    const { cart,auth } = state;

    useEffect(() => {
        const data = sessionStorage.getItem("localCart");
        if(data) {
            if (Object.keys(JSON.parse(data))?.length) {
            dispatch({ type: "ADD_CART", payload: JSON.parse(data) });
            }
        }
        else {
            dispatch({ type: "ADD_CART", payload: [] });
        }
    }, []);
    useEffect(() => {
        const data = localStorage.getItem("user");
        if(data) {
            if (Object.keys(JSON.parse(data))?.length) {
            dispatch({ type: "AUTH", payload: JSON.parse(data) });
            }
        }
        else {
            dispatch({ type: "AUTH", payload: [] });
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("localCart", JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(auth));
    }, [auth]);
    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
