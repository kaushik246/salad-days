import { people_data } from './constants'

export const SET_PEOPLE_LIST = 'SET_PEOPlE_LIST'

const init = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
}

const setPeopleList = (people) => ({
  type: SET_PEOPLE_LIST,
  people
})

export const getPeopleList = () => async (dispatch, getState) => {
  const url = '/api/star-wars/people'
  try {
    //const response = await fetch(url, { method: 'GET', ...init })
    //const json = await response.json()
    //if (json.ok) dispatch(setMoviesList(json.data))
    dispatch(dispatch(setPeopleList(people_data)))
    //else dispatch(dispatch(setMoviesList([])))
  } catch (e) {
    dispatch(setPeopleList([]))
  }
}
