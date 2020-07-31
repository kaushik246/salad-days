import { movie_data } from './constants'

export const SET_MOVIES_LIST = 'SET_MOVIES_LIST'
export const ADD_MOVIE = 'ADD_MOVIE'
const init = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
}

const setMoviesList = (movies) => ({
  type: SET_MOVIES_LIST,
  movies
})

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie
})

export const getMoviesList = () => async (dispatch, getState) => {
  const url = '/api/star-wars/movies'
  try {
    //const response = await fetch(url, { method: 'GET', ...init })
    //const json = await response.json()
    //if (json.ok) dispatch(setMoviesList(json.data))
    dispatch(setMoviesList(movie_data))
    //else dispatch(dispatch(setMoviesList([])))
  } catch (e) {
    dispatch(setMoviesList([]))
  }
}
