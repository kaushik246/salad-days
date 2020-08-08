import { SET_MOVIES_LIST, ADD_MOVIE } from './actions'

const defaultState = {
  movies: []
}

const moviesList = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MOVIES_LIST:
      return {
        ...state,
        movies: action.movies
      }
    case ADD_MOVIE:
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            title: action.movie,
            release_date: '1983-05-25',
            director: 'Lucas George',
            producer: 'Gary Kurtz, Rick McCallum'
          }
        ]
      }
    default:
      return state
  }
}

export default moviesList
