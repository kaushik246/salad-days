export const CART_ADD_BOX = 'CART_ADD_BOX'
export const CART_INCREASE_QUANTITY = 'CART_INCREASE_QUANTITY'
export const CART_DECREASE_QUANTITY = 'CART_DECREASE_QUANTITY'
export const CART_REMOVE_BOX = 'CART_REMOVE_BOX'
export const CART_CHECKOUT = 'CART_CHECKOUT'
export const CART_UPDATE_SUBTOTAL = 'CART_UPDATE_SUBTOTAL'
export const CART_SET_CHECKOUT_ID = 'CART_SET_CHECKOUT_ID'
export const CART_UPDATE = 'CART_UPDATE'
export const CART_REQUEST_ADD_LINE_ITEM = 'CART_REQUEST_ADD_LINE_ITEM'
export const CART_UPDATE_LINE_ITEM = 'CART_UPDATE_LINE_ITEM'

export const addBoxToCart = (box) => {
  var cartInJson = JSON.stringify(box)
  localStorage.setItem('cartValue', cartInJson)
  /* ---------------------------
  To get item from localStorage. Use following command
  var getItem = localStorage.getItem('cartValue');
  */
  return {
    type: CART_ADD_BOX,
    box
  }
}

export const increaseQuantity = (cartId) => {
  return {
    type: CART_INCREASE_QUANTITY,
    cartId
  }
}

export const decreaseQuantity = (cartId) => {
  return {
    type: CART_DECREASE_QUANTITY,
    cartId
  }
}

export const removeItem = (cartId, box) => {
  return {
    type: CART_REMOVE_BOX,
    cartId,
    box
  }
}

export const updateCartSubtotal = () => {
  return {
    type: CART_UPDATE_SUBTOTAL
  }
}

export const setCheckoutId = (checkoutId) => {
  return {
    type: CART_SET_CHECKOUT_ID,
    checkoutId
  }
}

export const requestAddLineItem = () => {
  return {
    type: CART_REQUEST_ADD_LINE_ITEM
  }
}
