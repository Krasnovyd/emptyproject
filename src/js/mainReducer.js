import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import nav from './nav/navReducer'
import order from './order/orderReducer'

export default combineReducers({
	routing: routerReducer,
	order,
	nav
})