import {
  ITEMS_REQUEST_PRODUCT_LIST,
  ITEMS_RECEIVE_PRODUCT_LIST,
  ITEMS_ADD_TO_BOX,
  ITEMS_REMOVE_FROM_BOX,
  ITEMS_CLEAR_FROM_BOX,
  ITEMS_OPEN_DETAIL_MODAL,
  ITEMS_CLOSE_DETAIL_MODAL,
  ITEMS_OPEN_INFO_MODAL,
  ITEMS_CLOSE_INFO_MODAL
} from './actions'

const defaultState = {
  productList: [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/sanitizerbottle_1024x1024@2x.jpg?v=1598077367',
      price: 1000,
      discountPrice: 800,
      quantity: 9,
      title: 'Sanitizer Bottle',
      maxQuantityAllowed: 2,
      weight: 1
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/ceramicmug_1024x1024@2x.jpg?v=1598077367',
      price: 5000,
      discountPrice: 4000,
      quantity: 6,
      title: 'Mugs',
      maxQuantityAllowed: 5,
      weight: 2
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/woodenchoppingboard_1024x1024@2x.jpg?v=1598077368',
      price: 4000,
      discountPrice: 2500,
      quantity: 11,
      title: 'Chopping Board',
      maxQuantityAllowed: 2,
      weight: 4
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/sanitizerbottle_1024x1024@2x.jpg?v=1598077367',
      price: 1000,
      discountPrice: 800,
      quantity: 2,
      title: 'Sanitizer Bottle 2',
      maxQuantityAllowed: 2,
      weight: 1
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
  totalVolumetricWeight: 0,
  subTotal: 0,
  itemDetailModal: false,
  infoModal: false,
  info: '',
  title: ''
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
          selectedItemsCount: state.selectedItemsCount,
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
          subTotal: state.subTotal + action.product.price,
          totalVolumetricWeight:
            state.totalVolumetricWeight + action.product.weight
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
        subTotal: state.subTotal - action.product.price,
        totalVolumetricWeight:
          state.totalVolumetricWeight - action.product.weight
      }
    case ITEMS_CLEAR_FROM_BOX:
      return {
        ...state,
        boxImage: null,
        selectedBox: null,
        selectedProducts: {},
        dataIsFetching: false,
        selectedItemsCount: 0,
        totalVolumetricWeight: 0,
        subTotal: 0,
        itemDetailModal: false,
        infoModal: false,
        info: '',
        title: ''
      }
    case ITEMS_OPEN_DETAIL_MODAL:
      return {
        ...state,
        itemDetailModal: true
      }
    case ITEMS_CLOSE_DETAIL_MODAL:
      return {
        ...state,
        itemDetailModal: false
      }
    case ITEMS_OPEN_INFO_MODAL:
      return {
        ...state,
        info: action.info,
        title: action.title,
        infoModal: true
      }
    case ITEMS_CLOSE_INFO_MODAL:
      return {
        ...state,
        info: '',
        title: '',
        infoModal: false
      }
    default:
      return state
  }
}

export default items
