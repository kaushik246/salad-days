import {
  BOX_DETAIL_OPEN_CARD_MODAL,
  BOX_DETAIL_CLOSE_CARD_MODAL,
  BOX_DETAIL_SET_CARD
} from './actions'

const defaultState = {
  cardSelected: '',
  cardImage: '',
  to: '',
  from: '',
  message: '',
  boxSelected: '',
  boxImage: '',
  boxQuantity: '',
  cardModal: false
}

const boxDetail = (state = defaultState, action) => {
  switch (action.type) {
    case BOX_DETAIL_OPEN_CARD_MODAL:
      return {
        ...state,
        cardModal: true
      }
    case BOX_DETAIL_CLOSE_CARD_MODAL:
      return {
        ...state,
        cardModal: false
      }
    case BOX_DETAIL_SET_CARD:
      return {
        ...state,
        cardSelected: action.card.title,
        cardImage: action.card.image,
        cardModal: false
      }
    default:
      return state
  }
}

export default boxDetail
