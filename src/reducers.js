import { SET_PAGE_TITLE } from './actions'

const defaultState = {
  user: 'Kaushik Kota',
  title: ''
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}

export default app
