import { createContext, useEffect, useReducer } from "react";
export const ACTIONS = {
    NOTIFY: "NOTIFY",
    AUTH: "AUTH",
    ADD_CART: "ADD_CART",
};

export const addToCart = (product, cart) => {
    const data = [...cart]
    const existItem = data.find(item => item.itemId == product.itemId && item.orderToppings.map(it => it.toppingId).join('') == product.orderToppings.map(item => item.toppingId).join(''))
    if (existItem) {
        // console.log('existItem',existItem)
        // const newData = cart.filter(item => (item.itemId != product.itemId)
        // &&
        // (item.itemId == product.itemId && item.orderToppings.map(it => it.toppingId).join('') != product.orderToppings.map(item => item.toppingId).join('')        )
        // )
        const newCart = data.filter(item =>(item.itemId == product.itemId) && item.orderToppings.map(it => it.toppingId).join('') != product.orderToppings.map(item => item.toppingId).join('') || item.itemId != product.itemId)
    
        console.log('newddaata', [...newCart, {...existItem, quantity: existItem.quantity++} ])
        return {
                type: "ADD_CART", payload: [...newCart, {...existItem, quantity: existItem.quantity++} ]

        }
        // console.log('existItem', fil)
        // if (fil.length) {
        //     return {
        //         type: "ADD_CART", payload: [{ ...fil[0], quantity: fil[0].quantity + product.quantity }]
        //     }
        // }
        // else {
            return {
                type: "ADD_CART", payload: [...cart]
            }
        // }

    }
    else {
        console.log('unexistItem')

        return {
            type: "ADD_CART", payload: [...cart, { ...product }]
        }
    }

};
export const removeFromCart = (product, cart) => {
    const { orderToppings } = product
    const listToppingProduct = orderToppings.map(item => item.toppingId).join('')

    const existItem = cart.filter(item => item.itemId == product.itemId && item.orderToppings.map(it => it.toppingId).join('') == listToppingProduct)
    console.log('first', existItem)
    const fil = existItem.filter(item => item.orderToppings.map(it => it.toppingId).join('') == listToppingProduct)
    if (fil.length)
        return {
            type: "ADD_CART", payload: [...cart]
        }
}
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
