import {
  NAV_SET_PAGE
} from './actions'

const defaultState = {
  page: ''
}

const nav = (state = defaultState, action) => {
  switch (action.type) {
    case NAV_SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    default:
      return state
  }
}

export default nav