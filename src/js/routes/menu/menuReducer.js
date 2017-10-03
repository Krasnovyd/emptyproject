const initialState = {
	tabs: [
		{
			active: true,
			title: 'lite',
			sub: '1000kkal'

		},
		{
			active: false,
			title: 'balance',
			sub: '1500kkal'
		},
		{
			active: false,
			title: 'hard',
			sub: '2000kkal'
		},
		{
			active: false,
			title: 'business',
			sub: '2000kkal'
		}
	],
	selectedMenu: 'lite'
}

export default function nav(state = initialState, action) {
	switch (action.type) {
		case 'PREPARE_ORDER':
			return {...state, selectedMenu: action.response.selectedMenu}

		case 'CHANGE_TAB':
			return {...state, tabs: action.response.tabs}

		default:
			return state
	}
}