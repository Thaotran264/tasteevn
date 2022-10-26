import { createContext, useEffect, useReducer, useRef } from "react";
import reducers from "./reducers";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("localCart")) || {};
    if (Object.keys(data)?.length) {
      dispatch({ type: "ADD_CART", payload: data });
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("localCart", JSON.stringify(cart));
  }, [cart]);
  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
