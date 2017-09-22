const initialState = {
	menus: [
		{ value: '1500', label: 'Набор - 1500ккал' },
		{ value: '2000', label: 'Набор - 2000ккал' },
		{ value: '2500', label: 'Набор - 2500ккал' }
	],
	selectedMenu: '2000'
}

export default function nav(state = initialState, action) {
	switch (action.type) {

		case 'SELECTED_MENU':
			return {...state, selectedMenu: action.response}

		default:
			return state
	}
}