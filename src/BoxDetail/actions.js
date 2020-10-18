export const BOX_DETAIL_OPEN_CARD_MODAL = 'BOX_DETAIL_OPEN_CARD_MODAL'
export const BOX_DETAIL_CLOSE_CARD_MODAL = 'BOX_DETAIL_CLOSE_CARD_MODAL'
export const BOX_DETAIL_SET_CARD = 'BOX_DETAIL_SET_CARD'
export const BOX_DETAIL_SET_BOX = 'BOX_DETAIL_SET_BOX'
export const BOX_DETAIL_CLEAR_BOX = 'BOX_DETAIL_CLEAR_BOX'

export const openCardModal = () => {
  return {
    type: BOX_DETAIL_OPEN_CARD_MODAL,
  }
}

export const closeCardModal = () => {
  return {
    type: BOX_DETAIL_CLOSE_CARD_MODAL,
  }
}

export const setCard = (cardTitle, cardImage) => {
  return {
    type: BOX_DETAIL_SET_CARD,
    cardTitle,
    cardImage,
  }
}

export const setBox = (box) => {
  return {
    type: BOX_DETAIL_SET_BOX,
    box,
  }
}

export const clearBox = () => {
  return {
    type: BOX_DETAIL_CLEAR_BOX,
  }
}
