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
	deliveryStart: 6,
	deliveryEnd: 10,
	deliveryStartTimes: [
		{ label: '06:00', value: 6 },
		{ label: '07:00', value: 7 },
		{ label: '08:00', value: 8 }
	],
	deliveryEndTimes: [
		{ label: '08:00', value: 8 },
		{ label: '09:00', value: 9 },
		{ label: '10:00', value: 10 }
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

		case 'CHANGE_DELIVERY_TIMES':
			return {...state, deliveryStart: action.response.deliveryStart, deliveryEnd: action.response.deliveryEnd}

		default:
			return state
	}
}