import {
  CARD_REQUEST_PRODUCT_LIST,
  CARD_RECEIVE_PRODUCT_LIST,
  CARD_ADD_TO_BOX,
  UPDATE_CARD_IN_BOX
} from './actions'

const defaultState = {
  cardsList: [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Card_3_1024x1024@2x.jpg?v=1597324651',
      title: 'Card 1'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Card_2_1024x1024@2x.jpg?v=1597324651',
      title: 'Card 2'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Card_1_1024x1024@2x.jpg?v=1597324651',
      title: 'Card 3'
    }
  ],
  selectedCard: null,
  dataIsFetching: false,
  changeCard: false,
}

const card = (state = defaultState, action) => {
  switch (action.type) {
    case CARD_REQUEST_PRODUCT_LIST:
      return {
        ...state,
        dataIsFetching: action.dataIsFetching
      }
    case CARD_RECEIVE_PRODUCT_LIST:
      return {
        ...state,
        dataIsFetching: action.dataIsFetching,
        cardsList: defaultState.productList, // action.productList
        selectedCard: defaultState.selectedCard
      }
    case CARD_ADD_TO_BOX:
      return {
        ...state,
        selectedCard: action.card,
        changeCard: false
      }
    case UPDATE_CARD_IN_BOX:
      return {
        ...state,
        changeCard: true
      }
    default:
      return state
  }
}

export default card
