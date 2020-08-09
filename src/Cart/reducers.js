import {
    CART_ADD_BOX,
    CART_INCREASE_QUANTITY,
    CART_DECREASE_QUANTITY,
    CART_REMOVE_BOX,
    CART_CHECKOUT,
    CART_UPDATE_SUBTOTAL
} from './actions'

const defaultState = {
    cartItems:[],
    cartPrice: 100,
    dataIsFetching: false
}

const cart = (state = defaultState, action) => {
    switch (action.type) {
        case CART_INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: defaultState.cartItems
            }
        case CART_DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: defaultState.cartItems
            }
        case CART_ADD_BOX:
            return {
                ...state,
                cartItems: [...state.cartItems, action.box]
            }
        case CART_REMOVE_BOX:
            return {
                ...state,
                cart: [...state.cartItems]
            }
        case CART_REMOVE_BOX:
            return {
                ...state,
                cart: [...state.cartItems]
            }
        case CART_UPDATE_SUBTOTAL:
            return {
                ...state,
                cartPrice: 100
            }
        default:
            return state
    }
}

export default cart
