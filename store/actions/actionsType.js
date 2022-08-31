export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
};

export const addToCart = (product, cart) => {
  const check = cart.find((item) => {
    return item.id == product.id;
  });

  if (check) return {
    type: "ADD_CART", payload: [...cart, { ...product, quantity: product.quantity++ }]
  }
  else {
    return {
      type: "ADD_CART",
      payload: [...cart, { ...product, quantity: 1 }],
    };
  }
};
export const decrease = (data, id) => {
  console.log(data, id)
  const newData = [...data]

  const check = newData.find((item) => {
    return item.id == id;
  });
  console.log(check)
  newData.forEach(item => {
    if (item.id === id) item.quantity -= 1
  })
  return ({ type: 'ADD_CART', payload: newData })
  // if (it.quantity > 1) {

  //   newData.forEach(item => {
  //     if (item.id === it.id) item.quantity -= 1
  //   })
  //   return ({ type: 'ADD_CART', payload: newData })

  // }
  // else {
  //   const dat = newData.filter(item => item.id != it.id)
  //   return ({ type: 'ADD_CART', payload: dat })
  // }
  return ({
    type: 'ADD_CART', payload: newData
  })

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