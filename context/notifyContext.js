import { createContext, useEffect, useReducer } from "react";
import { reducers } from "./reducers";

export const NotifyContext = createContext();
export const NotifyProvider = ({ children }) => {
    const initialState = {
        notify: {}
    };
    const [state, dispatch] = useReducer(reducers, initialState);

    return <NotifyContext.Provider value={{ state, dispatch }}>{children}</NotifyContext.Provider>;
};
