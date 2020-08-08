import { SET_PEOPLE_LIST } from './actions'

const defaultState = {
  people: []
}

const peopleList = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PEOPLE_LIST:
      return {
        ...state,
        people: action.people
      }
    default:
      return state
  }
}

export default peopleList
