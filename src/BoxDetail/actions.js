export const BOX_DETAIL_OPEN_CARD_MODAL = 'BOX_DETAIL_OPEN_CARD_MODAL'
export const BOX_DETAIL_CLOSE_CARD_MODAL = 'BOX_DETAIL_CLOSE_CARD_MODAL'
export const BOX_DETAIL_SET_CARD = 'BOX_DETAIL_SET_CARD'

export const openCardModal = () => {
  return {
    type: BOX_DETAIL_OPEN_CARD_MODAL
  }
}

export const closeCardModal = () => {
  return {
    type: BOX_DETAIL_CLOSE_CARD_MODAL
  }
}

export const setCard = (card) => {
  return {
    type: BOX_DETAIL_SET_CARD,
    card
  }
}
