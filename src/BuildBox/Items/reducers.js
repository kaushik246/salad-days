import {
  ITEMS_REQUEST_PRODUCT_LIST,
  ITEMS_RECEIVE_PRODUCT_LIST,
  ITEMS_ADD_TO_BOX,
  ITEMS_REMOVE_FROM_BOX,
  ITEMS_CLEAR_FROM_BOX
} from './actions'

const defaultState = {
  productList: [
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/sanitizerbottle_1024x1024@2x.jpg?v=1598077367',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Sanitizer Bottle'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/ceramicmug_1024x1024@2x.jpg?v=1598077367',
      price: 5000,
      discountPrice: 4000,
      quantity: 6,
      title: 'Mugs'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/woodenchoppingboard_1024x1024@2x.jpg?v=1598077368',
      price: 4000,
      discountPrice: 2500,
      quantity: 11,
      title: 'Chopping Board'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/sanitizerbottle_1024x1024@2x.jpg?v=1598077367',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Sanitizer Bottle'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/ceramicmug_1024x1024@2x.jpg?v=1598077367',
      price: 5000,
      discountPrice: 4000,
      quantity: 6,
      title: 'Mugs'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/woodenchoppingboard_1024x1024@2x.jpg?v=1598077368',
      price: 4000,
      discountPrice: 2500,
      quantity: 11,
      title: 'Chopping Board'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/sanitizerbottle_1024x1024@2x.jpg?v=1598077367',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Sanitizer Bottle'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/ceramicmug_1024x1024@2x.jpg?v=1598077367',
      price: 5000,
      discountPrice: 4000,
      quantity: 6,
      title: 'Mugs'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/woodenchoppingboard_1024x1024@2x.jpg?v=1598077368',
      price: 4000,
      discountPrice: 2500,
      quantity: 11,
      title: 'Chopping Board'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/sanitizerbottle_1024x1024@2x.jpg?v=1598077367',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Sanitizer Bottle'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/ceramicmug_1024x1024@2x.jpg?v=1598077367',
      price: 5000,
      discountPrice: 4000,
      quantity: 6,
      title: 'Mugs'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/woodenchoppingboard_1024x1024@2x.jpg?v=1598077368',
      price: 4000,
      discountPrice: 2500,
      quantity: 11,
      title: 'Chopping Board'
    }
  ],
  boxesList: [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mainboxbrown_1024x1024@2x.jpg?v=1598077337',
      price: 100,
      discountPrice: 40,
      quantity: 0,
      title: 'Original Craft Box',
      type: 'box'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mainboxblue_1024x1024@2x.jpg?v=1598077337',
      price: 100,
      discountPrice: 40,
      quantity: 0,
      title: 'Til Blue Box',
      type: 'box'
    }
  ],
  boxImage: null,
  selectedBox: null,
  selectedProducts: {},
  dataIsFetching: false,
  selectedItemsCount: 0,
  subTotal: 0
}

const items = (state = defaultState, action) => {
  switch (action.type) {
    case ITEMS_REQUEST_PRODUCT_LIST:
      return {
        ...state,
        dataIsFetching: action.dataIsFetching
      }
    case ITEMS_RECEIVE_PRODUCT_LIST:
      return {
        ...state,
        dataIsFetching: action.dataIsFetching,
        productList: defaultState.productList // action.productList
      }
    case ITEMS_ADD_TO_BOX:
      let newSelectedProducts = state.selectedProducts
      if (action.product.type && action.product.type === 'box') {
        newSelectedProducts[action.product.type] = {
          count: 0,
          title: action.product.title,
          price: action.product.price,
          image: action.product.image
        }
        return {
          ...state,
          selectedItemsCount: state.selectedItemsCount + 1,
          selectedProducts: newSelectedProducts,
          selectedBox: action.product.title,
          selectedBoxImage: action.product.image
        }
      } else {
        if (state.selectedProducts.hasOwnProperty(action.product.title)) {
          newSelectedProducts[action.product.title]['count'] += 1
        } else {
          newSelectedProducts[action.product.title] = {
            count: 1,
            title: action.product.title,
            price: action.product.price,
            image: action.product.image
          }
        }
        return {
          ...state,
          selectedItemsCount: state.selectedItemsCount + 1,
          selectedProducts: newSelectedProducts,
          subTotal: state.subTotal + action.product.price
        }
      }
    case ITEMS_REMOVE_FROM_BOX:
      let afterDecreasingCount = state.selectedProducts
      if (state.selectedProducts.hasOwnProperty(action.product.title)) {
        afterDecreasingCount[action.product.title]['count'] -= 1
        if (afterDecreasingCount[action.product.title]['count'] === 0) {
          delete afterDecreasingCount[action.product.title]
        }
      }
      return {
        ...state,
        selectedItemsCount: state.selectedItemsCount - 1,
        selectedProducts: afterDecreasingCount,
        subTotal: state.subTotal - action.product.price
      }
    case ITEMS_CLEAR_FROM_BOX:
      return {
        ...state,
        selectedBox: null,
        selectedProducts: {},
        subTotal: 0,
        selectedItemsCount: 0
      }
    default:
      return state
  }
}

export default items
