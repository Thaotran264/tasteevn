import { createContext, useEffect, useReducer, useRef } from "react";
export const ACTIONS = {
    NOTIFY: "NOTIFY",
    AUTH: "AUTH",
    ADD_CART: "ADD_CART",
};

export const addToCart = (product, cart) => {
    const {orderToppings} = product
    const listToppingProduct = orderToppings.map(item => item.toppingId).join('')
    //b1: kiem tra id da ton tai hay chua
    // neu chua ton tai thi them moi
    //neu ton tai thi kiem ta topping

    const existItem = cart.filter(item => item.itemId == product.itemId)
    const fil = existItem.filter(item => item.orderToppings.map(it=>it.toppingId).join('') == listToppingProduct)
    // const test = existItem.map(item =>item.orderToppings.map(it => it.toppingId))
    // const fil = test.map(item => item.map(item => item.toppingId).join(''))
    // const tessss = fil.filter(item => item == listToppingProduct)
    // const tps = existItem.filter(item => )
    if(existItem.length) {
        console.log('existItem',fil)
        
        if(fil.length) {
            return {
                type: "ADD_CART", payload: [{...fil[0], quantity:fil[0].quantity+ product.quantity}]
            }
        }
        else {
            return {
                type: "ADD_CART", payload: [...cart,{ ...product}]
            }
        }  
 
    }
    else {
        console.log('unexistItem')

        return {
            type: "ADD_CART", payload: [...cart, { ...product}]
        }
    }

};
export const decrease = (data, id) => {
    const newData = [...data]
    data.forEach((item, i) => {
        if (item.id === id) {
            if (item.quantity == 1) {
                item.quantity -= 1
                newData.splice(i, 1)
            }
            else if (item.quantity > 1) {
                return item.quantity -= 1
            }
        }
    })
    return ({ type: 'ADD_CART', payload: newData })
}
export const increase = (data, it) => {
    const newData = [...data]

    const check = newData.find((item) => {
        return item.id == it.id;
    });
    if (!check) {
        return {
            type: "ADD_CART",
            payload: [...data, { ...it, quantity: 1 }],
        };
    }
    else {
        newData.forEach(item => {
            if (item.id === it.id) item.quantity += 1
        })
        return ({ type: 'ADD_CART', payload: newData })
    }
}
export const deleteItem = (data, id) => {
    const newData = data.filter(item => item.id !== id)
    return ({ type: 'ADD_CART', payload: newData })
}
export const clearCart = () => {
    return ({ type: 'ADD_CART', payload: [] })
}
const reducers = (state, action) => {
    switch (action.type) {
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload,
            };
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: action.payload,
            };
        case ACTIONS.ADD_CART:
            return {
                ...state,
                cart: action.payload,
            };

        default:
            return state;
    }
};
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const initialState = {
        cart: [],
        notify: {},
        auth: {}
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
