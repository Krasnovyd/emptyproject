import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import mainReducer from './mainReducer'
import { routerMiddleware } from 'react-router-redux'

export function configureStore(history, initialState) {
	const store = createStore(
		mainReducer,
		initialState,
		applyMiddleware(
			routerMiddleware(history),
			thunkMiddleware,
			createLogger()
		)
	)

	return store
}