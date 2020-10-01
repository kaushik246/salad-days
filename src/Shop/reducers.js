import {
  SHOP_REQUEST_ITEMS_LIST,
  SHOP_RECEIVE_ITEMS_LIST,
  SHOP_REQUEST_ITEM,
  SHOP_RECEIVE_ITEM,
  UNSET_SHOP_ITEM,
  SHOP_REQUEST_CARDS,
  SHOP_RECEIVE_CARDS
} from './actions'

const defaultState = {
  shopItems: null,
  dataIsFetching: false,
  shopItem: null,
  cards: null,
  cardDataIsFetching: false
}

const shop = (state = defaultState, action) => {
  switch (action.type) {
    case SHOP_REQUEST_ITEMS_LIST:
      return {
        ...state,
        dataIsFetching: action.dataIsFetching
      }
    case SHOP_RECEIVE_ITEMS_LIST:
      return {
        ...state,
        dataIsFetching: action.dataIsFetching,
        shopItems: action.shopItems
      }
    case SHOP_REQUEST_ITEM:
      return {
        ...state,
        dataIsFetching: true
      }
    case SHOP_RECEIVE_ITEM:
      return {
        ...state,
        dataIsFetching: false,
        shopItem: action.shopItem
      }
    case UNSET_SHOP_ITEM:
      return {
        ...state,
        shopItem: null
      }
    case SHOP_REQUEST_CARDS:
      return {
        ...state,
        cardDataIsFetching: true
      }
    case SHOP_RECEIVE_CARDS:
      return {
        ...state,
        cardDataIsFetching: false,
        cards: action.cards
      }
    default:
      return state
  }
}

export default shop
