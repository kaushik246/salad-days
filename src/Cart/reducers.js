import {
  CART_ADD_BOX,
  CART_INCREASE_QUANTITY,
  CART_DECREASE_QUANTITY,
  CART_REMOVE_BOX,
  CART_CHECKOUT,
  CART_UPDATE_SUBTOTAL,
  CART_SET_CHECKOUT_ID,
  CART_UPDATE
} from './actions'

const defaultState = {
  cartItems: {},
  cartPrice: 0,
  cartItemsCount: 0,
  dataIsFetching: false,
  checkoutId: null,
  checkout: null
}

const cart = (state = defaultState, action) => {
  switch (action.type) {
    case CART_INCREASE_QUANTITY:
      let increaseQuantity = state.cartItems
      increaseQuantity[action.cartId]['quantity'] =
        increaseQuantity[action.cartId]['quantity'] + 1
      return {
        ...state,
        cartItems: increaseQuantity,
        cartPrice: state.cartPrice + increaseQuantity[action.cartId]['price']
      }
    case CART_DECREASE_QUANTITY:
      let decreaseQuantity = state.cartItems
      let decreaseQuantityPrice = state.cartPrice
      if (decreaseQuantity[action.cartId]['quantity'] > 1) {
        decreaseQuantity[action.cartId]['quantity'] =
          decreaseQuantity[action.cartId]['quantity'] - 1
        decreaseQuantityPrice =
          decreaseQuantityPrice - decreaseQuantity[action.cartId]['price']
      }
      return {
        ...state,
        cartItems: decreaseQuantity,
        cartPrice: decreaseQuantityPrice
      }
    case CART_ADD_BOX:
      let newCartItems = state.cartItems
      let newBoxKey =
        state.cartItemsCount === 0
          ? 1
          : Math.max(...Object.keys(state.cartItems)) + 1
      newCartItems[newBoxKey] = action.box
      return {
        ...state,
        cartItems: newCartItems,
        cartPrice: state.cartPrice + action.box.price * action.box.quantity,
        cartItemsCount: state.cartItemsCount + 1
      }
    case CART_REMOVE_BOX:
      let updatedCartItems = state.cartItems
      delete updatedCartItems[action.cartId]
      return {
        ...state,
        cartItems: updatedCartItems,
        cartItemsCount: state.cartItemsCount - 1,
        cartPrice: state.cartPrice - action.box.price * action.box.quantity
      }
    case CART_UPDATE_SUBTOTAL:
      return {
        ...state,
        cartPrice: action.cartPrice
      }
    case CART_SET_CHECKOUT_ID:
      localStorage.setItem('saladDays', { checkoutId: action.checkoutId })
      return {
        ...state,
        checkoutId: action.checkoutId
      }
    case CART_UPDATE:
      return {
        ...state,
        checkout: action.checkout
      }
    default:
      return state
  }
}

export default cart
