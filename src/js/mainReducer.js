import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import nav from './routes/nav/navReducer'
import menu from './routes/menu/menuReducer'

export default combineReducers({
	routing: routerReducer,
	menu,
	nav
})