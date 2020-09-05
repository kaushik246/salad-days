export const ITEMS_REQUEST_PRODUCT_LIST = 'ITEMS_REQUEST_PRODUCT_LIST'
export const ITEMS_RECEIVE_PRODUCT_LIST = 'ITEMS_RECEIVE_PRODUCT_LIST'
export const ITEMS_REMOVE_FROM_BOX = 'ITEMS_REMOVE_FROM_BOX'
export const ITEMS_ADD_TO_BOX = 'ITEMS_ADD_TO_BOX'
export const ITEMS_CLEAR_FROM_BOX = 'ITEMS_CLEAR_FROM_BOX'
export const ITEMS_OPEN_DETAIL_MODAL = 'ITEMS_OPEN_DETAIL_MODAL'
export const ITEMS_CLOSE_DETAIL_MODAL = 'ITEMS_CLOSE_DETAIL_MODAL'
export const ITEMS_OPEN_INFO_MODAL = 'ITEMS_OPEN_INFO_MODAL'
export const ITEMS_CLOSE_INFO_MODAL = 'ITEMS_CLOSE_INFO_MODAL'

export const openInfoModal = (title, info) => {
  return {
    type: ITEMS_OPEN_INFO_MODAL,
    title,
    info
  }
}

export const closeInfoModal = () => {
  return {
    type: ITEMS_CLOSE_INFO_MODAL
  }
}

export const requestProductList = (dataIsFetching) => {
  return {
    type: ITEMS_REQUEST_PRODUCT_LIST,
    dataIsFetching: dataIsFetching
  }
}

export const openDetailModal = () => {
  return {
    type: ITEMS_OPEN_DETAIL_MODAL
  }
}

export const closeDetailModal = () => {
  return {
    type: ITEMS_CLOSE_DETAIL_MODAL
  }
}

export const fetchProductsList = (dataIsFetching = true) => {
  return async (dispatch, getState) => {
    const init = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    dispatch(requestProductList(dataIsFetching))
    try {
      const json = {
        ok: true,
        data: []
      }
      if (json.ok) dispatch(receiveProductList(json.data))
      else throw new Error(json.err.msg)
    } catch (e) {
      console.log('There is some problem')
    }
  }
}

export const receiveProductList = (productList) => {
  return {
    type: ITEMS_REQUEST_PRODUCT_LIST,
    dataIsFetching: false,
    productList
  }
}

export const addToBox = (product) => {
  return {
    type: ITEMS_ADD_TO_BOX,
    product
  }
}

export const removeFromBox = (product) => {
  return {
    type: ITEMS_REMOVE_FROM_BOX,
    product
  }
}

export const clearItems = () => {
  return {
    type: ITEMS_CLEAR_FROM_BOX
  }
}
