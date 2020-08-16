import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import app from './reducers'
import items from './BuildBox/Items/reducers'
import card from './BuildBox/Card/reducers'
import cart from './Cart/reducers'
import stepper from './Stepper/reducers'
import shop from './Shop/reducers'

const appReducers = {
  app,
  items,
  card,
  cart,
  stepper,
  shop
}

const rootReducer = combineReducers({
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
