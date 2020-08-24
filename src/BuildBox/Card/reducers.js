import {
  CARD_REQUEST_PRODUCT_LIST,
  CARD_RECEIVE_PRODUCT_LIST,
  CARD_ADD_TO_BOX,
  UPDATE_CARD_IN_BOX,
  UPDATE_MESSAGE_FIELDS,
  CARD_CLEAR_FROM_BOX
} from './actions'

const defaultState = {
  cardsList: [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_1_1024x1024@2x.jpg?v=1598077368',
      title: 'You are Awesome'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_2_1024x1024@2x.jpg?v=1598077367',
      title: 'Make a Wish'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_3_1024x1024@2x.jpg?v=1598077368',
      title: 'Love You'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_4_1024x1024@2x.jpg?v=1598077368',
      title: 'Happy Birthday'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_5_1024x1024@2x.jpg?v=1598077368',
      title: 'Love You'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_6_1024x1024@2x.jpg?v=1598077369',
      title: 'Blank Card'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_6_1024x1024@2x.jpg?v=1598077369',
      title: 'Happy Anniversary'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/cardmorckup_6_1024x1024@2x.jpg?v=1598077369',
      title: 'Happy Anniversary'
    }
  ],
  selectedCard: null,
  dataIsFetching: false,
  changeCard: false,
  to: '',
  from: '',
  message: ''
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
    case UPDATE_MESSAGE_FIELDS:
      state[action.fieldType] = action.fieldValue
      return state
    case CARD_CLEAR_FROM_BOX:
      return {
        ...state,
        selectedCard: null,
        to: '',
        from: '',
        message: ''
      }
    default:
      return state
  }
}

export default card
