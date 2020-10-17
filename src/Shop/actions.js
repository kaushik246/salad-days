import Client from 'shopify-buy'

export const SHOP_REQUEST_ITEMS_LIST = 'SHOP_REQUEST_ITEMS_LIST'
export const SHOP_RECEIVE_ITEMS_LIST = 'SHOP_RECEIVE_ITEMS_LIST'
export const SHOP_REQUEST_ITEM = 'SHOP_REQUEST_ITEM'
export const SHOP_RECEIVE_ITEM = 'SHOP_RECEIVE_ITEM'
export const SHOP_REQUEST_CARDS = 'SHOP_REQUEST_CARDS'
export const SHOP_RECEIVE_CARDS = 'SHOP_RECEIVE_CARDS'
export const UNSET_SHOP_ITEM = 'UNSET_SHOP_ITEM'
export const CART_UPDATE = 'CART_UPDATE'
export const CART_UPDATE_LINE_ITEM = 'CART_UPDATE_LINE_ITEM'

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

export const fetchCheckout = (checkoutId) => {
  return async (dispatch) => {
    try {
      const resp = await client.checkout.fetch(checkoutId)
      dispatch(cartUpdate(resp))
    } catch (e) {
      console.log('There is some problem', e)
    }
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

export const updateLineItems = (checkoutId, lineItemToUpdate) => {
  return async (dispatch) => {
    try {
      dispatch(updatingLineItem(lineItemToUpdate[0].id))
      const resp = await client.checkout.updateLineItems(
        checkoutId,
        lineItemToUpdate
      )
      dispatch(cartUpdate(resp))
    } catch (e) {
      console.log('There is some problem', e)
    }
  }
}

export const removeLineItem = (checkoutId, lineItemIds) => {
  return async (dispatch) => {
    try {
      const resp = await client.checkout.removeLineItems(
        checkoutId,
        lineItemIds
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
      dispatch(receiveShopItems(resp.products))
    } catch (e) {
      console.log('There is some problem', e)
    }
  }
}

export const fetchCards = (dataIsFetching = true) => {
  return async (dispatch) => {
    dispatch(requestCards(dataIsFetching))
    try {
      const resp = await client.collection.fetchWithProducts(
        'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIyNDE2NzM2MjcxOA=='
      )
      dispatch(receiveCards(resp.products))
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

export const requestCards = () => {
  return {
    type: SHOP_REQUEST_CARDS
  }
}

export const receiveCards = (cards) => {
  return {
    type: SHOP_RECEIVE_CARDS,
    cards
  }
}

export const updatingLineItem = (lineItemId) => {
  return {
    type: CART_UPDATE_LINE_ITEM,
    lineItemId
  }
}
