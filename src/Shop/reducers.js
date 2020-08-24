import { SHOP_REQUEST_ITEMS_LIST, SHOP_RECEIVE_ITEMS_LIST } from './actions'

const defaultState = {
  shopItems: [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedbox_1024x1024@2x.jpg?v=1598202095',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Mixed Box'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedfruitsnackbox_1024x1024@2x.jpg?v=1598202094',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Mixed Fruit Box'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/onefruitsnackbox_1024x1024@2x.jpg?v=1598202094',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Single Fruit Snack Box'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/snackboxsmall_1024x1024@2x.jpg?v=1598202094',
      price: 1000,
      discountPrice: 800,
      quantity: 1,
      title: 'Snack Box'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/snackboxtall_1024x1024@2x.jpg?v=1598202095',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Snack Box Tall'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Shop Item 8'
    }
  ],
  dataIsFetching: false
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
        shopItems: defaultState.shopItems // action.productList
      }
    default:
      return state
  }
}

export default shop
