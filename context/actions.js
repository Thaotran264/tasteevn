export const ACTIONS = {
    NOTIFY: "NOTIFY",
    AUTH: "AUTH",
    ADD_CART: "ADD_CART",
};
// Cart
export const addToCart = (product, cart) => {
    const data = [...cart]
    const existItem = data.find(item => item.itemId == product.itemId && item.orderToppings.map(it => it.toppingId).join('') == product.orderToppings.map(item => item.toppingId).join(''))
    if (existItem) {
        const newCart = data.filter(item => (item.itemId == product.itemId) && item.orderToppings.map(it => it.toppingId).join('') != product.orderToppings.map(item => item.toppingId).join('') || item.itemId != product.itemId)

        return {
            type: "ADD_CART", payload: [...newCart, { ...existItem, quantity: product.quantity > 1 ? existItem.quantity + product.quantity : existItem.quantity++ }]
        }
    }
    else {
        return {
            type: "ADD_CART", payload: [...cart, { ...product }]
        }
    }

};
export const removeFromCart = (product, cart) => {
    const data = [...cart]
    const newCart = data.filter(item => (item.itemId == product.itemId) && item.orderToppings.map(it => it.toppingId).join('') != product.orderToppings.map(item => item.toppingId).join('') || item.itemId != product.itemId)
    return {
        type: "ADD_CART", payload: [...newCart]
    }
}
export const decrease = (product, cart) => {
    const data = [...cart]
    const existItem = data.find(item => item.itemId == product.itemId && item.orderToppings.map(it => it.toppingId).join('') == product.orderToppings.map(item => item.toppingId).join(''))
    const newCart = data.filter(item => (item.itemId == product.itemId) && item.orderToppings.map(it => it.toppingId).join('') != product.orderToppings.map(item => item.toppingId).join('') || item.itemId != product.itemId)
    if (product.quantity > 1)
    {
        return {
            type: "ADD_CART", payload: [...newCart, { ...existItem, quantity: existItem.quantity - 1 }]
        }
    } else {
        return {
            type: "ADD_CART", payload: [...newCart]
        }
    }
}
export const increase = (product, cart) => {
    const data = [...cart]
    const existItem = data.find(item => item.itemId == product.itemId && item.orderToppings.map(it => it.toppingId).join('') == product.orderToppings.map(item => item.toppingId).join(''))
    const newCart = data.filter(item => (item.itemId == product.itemId) && item.orderToppings.map(it => it.toppingId).join('') != product.orderToppings.map(item => item.toppingId).join('') || item.itemId != product.itemId)
    const newData = [...newCart, { ...existItem, quantity: existItem.quantity + 1 }]
    return {
        type: "ADD_CART", payload: newData
    }
}
export const clearCart = () => {
    return ({ type: 'ADD_CART', payload: [] })
}
// Auth
export const logIn = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    sessionStorage.setItem("token", JSON.stringify(data.token));
    return {
        type: "AUTH", payload: data
    }
}
export const logOut = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    return {
        type: "AUTH", payload: {}
    }
}