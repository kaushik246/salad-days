import {
  SHOP_REQUEST_ITEMS_LIST,
  SHOP_RECEIVE_ITEMS_LIST,
  SHOP_REQUEST_ITEM,
  SHOP_RECEIVE_ITEM,
  UNSET_SHOP_ITEM
} from './actions'

const defaultState = {
  shopItems: null,
  dataIsFetching: false,
  shopItem: null
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
    default:
      return state
  }
}

export default shop
