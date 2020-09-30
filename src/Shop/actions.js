import { useSelector, useDispatch } from 'react-redux'
import Client from 'shopify-buy'
import { check } from 'prettier'

export const SHOP_REQUEST_ITEMS_LIST = 'SHOP_REQUEST_ITEMS_LIST'
export const SHOP_RECEIVE_ITEMS_LIST = 'SHOP_RECEIVE_ITEMS_LIST'
export const SHOP_REQUEST_ITEM = 'SHOP_REQUEST_ITEM'
export const SHOP_RECEIVE_ITEM = 'SHOP_RECEIVE_ITEM'
export const UNSET_SHOP_ITEM = 'UNSET_SHOP_ITEM'
export const CART_UPDATE = 'CART_UPDATE'

const client = Client.buildClient({
  storefrontAccessToken: '50c7db75bbf868e62de163103d68b8f1',
  domain: 'salad-days-gift-shop.myshopify.com'
})

export const createCheckout = () => {
  return (dispatch) => {
    client.checkout.create().then((resp) => {
      dispatch({ type: 'CART_SET_CHECKOUT_ID', checkoutId: resp.id })
    })
  }
}

export const addItemToCart = (checkoutId, lineItemsToAdd) => {
  return async (dispatch) => {
    try {
      const resp = await client.checkout.addLineItems(
        checkoutId,
        lineItemsToAdd
      )
      dispatch(cartUpdate(resp))
    } catch (e) {
      console.log('There is some problem', e)
    }
  }
}

export const fetchShopItems = (dataIsFetching = true) => {
  return async (dispatch) => {
    dispatch(requestShopItems(dataIsFetching))
    try {
      const resp = await client.collection.fetchWithProducts(
        'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIxMDE2NjI1MTY3OA=='
      )
      console.log(resp)
      dispatch(receiveShopItems(resp.products))
    } catch (e) {
      console.log('There is some problem', e)
    }
  }
}

export const fetchShopItemData = (id, dataIsFetching = true) => {
  return async (dispatch) => {
    dispatch(requestShopItem(dataIsFetching))
    try {
      const resp = await client.product.fetch(id)
      console.log(resp)
      dispatch(receiveShopItem(resp))
    } catch (e) {
      console.log('There is some problem', e)
    }
  }
}

export const requestShopItems = (dataIsFetching) => {
  return {
    type: SHOP_REQUEST_ITEMS_LIST,
    dataIsFetching: dataIsFetching
  }
}

export const receiveShopItems = (shopItems) => {
  return {
    type: SHOP_RECEIVE_ITEMS_LIST,
    dataIsFetching: false,
    shopItems
  }
}

export const requestShopItem = () => {
  return {
    type: SHOP_REQUEST_ITEM
  }
}

export const receiveShopItem = (shopItem) => {
  return {
    type: SHOP_RECEIVE_ITEM,
    dataIsFetching: false,
    shopItem
  }
}

export const unsetShopItemData = () => {
  return {
    type: UNSET_SHOP_ITEM
  }
}

export const cartUpdate = (checkout) => {
  return {
    type: CART_UPDATE,
    checkout
  }
}
