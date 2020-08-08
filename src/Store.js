import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import app from './reducers'
import items from './BuildBox/Items/reducers'

const appReducers = {
	app,
	items
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
