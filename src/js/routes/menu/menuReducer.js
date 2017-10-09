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
			sub: '2500kkal'
		}
	],
	selectedMenu: 'lite',
	weekendsOff: false,
	daysCount: '1 day'
}

export default function nav(state = initialState, action) {
	let daysCount

	switch (action.type) {
		case 'PREPARE_ORDER':
			return {...state, selectedMenu: action.response.selectedMenu}

		case 'CHANGE_TAB':
			return {...state, tabs: action.response.tabs}

		case 'WEEKENDS_OFF':
			return {...state, weekendsOff: action.response.weekendsOff}

		case 'CHANGE_DAYS_COUNT':
			return {...state, daysCount: action.response.count}

		default:
			return state
	}
}