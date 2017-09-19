import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import nav from './nav/navReducer'

export default combineReducers({
	routing: routerReducer,
	nav
})