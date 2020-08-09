import {
    CART_ADD_BOX,
    CART_INCREASE_QUANTITY,
    CART_DECREASE_QUANTITY,
    CART_REMOVE_BOX,
    CART_CHECKOUT,
    CART_UPDATE_SUBTOTAL
} from './actions'

const defaultState = {
    cartItems:[{
        type: 'BUILD A BOX',
        image: 'https://cdn.shopify.com/s/files/1/0558/2845/products/7A1A3039_Cropped_1_87da068e-12a0-42f7-801b-87115ccbc63c.jpg?v=1542406753', 
        box: 'White',
        boxSize: 'Mini',
        card: 'Happy Birthday',
        message: 'Hi Hello',
        items: [
            {
                name: 'Product 1',
                quantity: 1
            }
        ]
    }],
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
