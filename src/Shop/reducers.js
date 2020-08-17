import { SHOP_REQUEST_ITEMS_LIST, SHOP_RECEIVE_ITEMS_LIST } from './actions'

const defaultState = {
  shopItems: [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Shop Item 1'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Shop Item 2'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Shop Item 3'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 1,
      title: 'Shop Item 4'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Shop Item 5'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 0,
      title: 'Shop Item 6'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651',
      price: 1000,
      discountPrice: 800,
      quantity: 0,
      title: 'Shop Item 7'
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
