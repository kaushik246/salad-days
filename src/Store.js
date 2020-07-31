import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import app from './reducers'
import peopleList from './components/PeopleList/reducers'
import moviesList from './components/MoviesList/reducers'

const mainReducers = {
  app,
  peopleList,
  moviesList
}

const appReducers = {
  peopleList,
  moviesList
}

const rootReducer = combineReducers({
  ...mainReducers,
  ...appReducers
})

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleware = [...middleware, logger]
}

export const configureStore = (defaultState) => {
  return createStore(rootReducer, applyMiddleware(...middleware))
}
