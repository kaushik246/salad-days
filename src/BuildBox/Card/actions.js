export const CARD_REQUEST_PRODUCT_LIST = 'CARD_REQUEST_PRODUCT_LIST'
export const CARD_RECEIVE_PRODUCT_LIST = 'CARD_RECEIVE_PRODUCT_LIST'
export const CARD_ADD_TO_BOX = 'CARD_ADD_TO_BOX'
export const UPDATE_CARD_IN_BOX = 'UPDATE_CARD_IN_BOX'
export const UPDATE_MESSAGE_FIELDS = 'UPDATE_MESSAGE_FIELDS'

export const requestCardList = (dataIsFetching) => {
  return {
    type: CARD_REQUEST_PRODUCT_LIST,
    dataIsFetching: dataIsFetching
  }
}

export const fetchCardList = (dataIsFetching = true) => {
  return async (dispatch, getState) => {
    const init = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    dispatch(requestCardList(dataIsFetching))
    try {
      const json = {
        ok: true,
        data: []
      }
      if (json.ok) dispatch(receiveCardList(json.data))
      else throw new Error(json.err.msg)
    } catch (e) {
      console.log('There is some problem')
    }
  }
}

export const receiveCardList = (cardList) => {
  return {
    type: CARD_REQUEST_PRODUCT_LIST,
    dataIsFetching: false,
    cardList
  }
}

export const addToBox = (card) => {
  return {
    type: CARD_ADD_TO_BOX,
    card
  }
}

export const updateCardInBox = () => {
  return {
    type: UPDATE_CARD_IN_BOX
  }
}

export const updateMessageFields = (fieldType, fieldValue) => {
  return {
    type: UPDATE_MESSAGE_FIELDS,
    fieldType,
    fieldValue
  }
}
