import {
  BOX_DETAIL_OPEN_CARD_MODAL,
  BOX_DETAIL_CLOSE_CARD_MODAL,
  BOX_DETAIL_SET_CARD,
  BOX_DETAIL_SET_BOX,
  BOX_DETAIL_CLEAR_BOX,
} from './actions'

const defaultState = {
  cardSelected: '',
  cardImage: '',
  boxSelected: '',
  boxImage: '',
  boxQuantity: '',
  cardModal: false,
}

const boxDetail = (state = defaultState, action) => {
  switch (action.type) {
    case BOX_DETAIL_OPEN_CARD_MODAL:
      return {
        ...state,
        cardModal: true,
      }
    case BOX_DETAIL_CLOSE_CARD_MODAL:
      return {
        ...state,
        cardModal: false,
      }
    case BOX_DETAIL_SET_CARD:
      return {
        ...state,
        cardSelected: action.cardTitle,
        cardImage: action.cardImage,
        cardModal: false,
      }
    case BOX_DETAIL_SET_BOX:
      return {
        ...state,
        boxSelected: action.box.title,
        boxImage: action.box.image,
        cardModal: false,
      }
    case BOX_DETAIL_CLEAR_BOX:
      return {
        ...state,
        boxSelected: '',
        cardSelected: '',
        boxImage: '',
      }
    default:
      return state
  }
}

export default boxDetail
