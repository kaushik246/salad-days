export const SHOP_REQUEST_ITEMS_LIST = 'SHOP_REQUEST_ITEMS_LIST'
export const SHOP_RECEIVE_ITEMS_LIST = 'SHOP_RECEIVE_ITEMS_LIST'

export const fetchShopItems = (dataIsFetching = true) => {
  return async (dispatch, getState) => {
    const init = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    dispatch(requestShopItems(dataIsFetching))
    try {
      const json = {
        ok: true,
        data: []
      }
      if (json.ok) dispatch(receiveShopItems(json.data))
      else throw new Error(json.err.msg)
    } catch (e) {
      console.log('There is some problem')
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
