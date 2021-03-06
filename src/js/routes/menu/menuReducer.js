const initialState = {
	tabs: [
		{
			active: true,
			title: 'Fitness',
			sub: '1500 ккал',
			salePrice: 220,
			price: 240
		},
		{
			active: false,
			title: 'Balance',
			sub: '2000 ккал',
			salePrice: 270,
			price: 290
		},
		{
			active: false,
			title: 'Strong',
			sub: '2500 ккал',
			salePrice: 300,
			price: 320
		},
		{
			active: false,
			title: 'Business',
			sub: '',
			salePrice: 160,
			price: 160
		},
		{
			active: false,
			title: 'Business+',
			sub: '',
			salePrice: 180,
			price: 180
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
	selectedMenu: 'Fitness',
	weekendsOff: true,
	daysCount: '1 day',
	days: 1
}

export default function nav(state = initialState, action) {
	switch (action.type) {
		case 'PREPARE_ORDER':
			return {...state, selectedMenu: action.response.selectedMenu}

		case 'CHANGE_TAB':
			return {...state, tabs: action.response.tabs}

		case 'WEEKENDS_OFF':
			return {...state, weekendsOff: action.response.weekendsOff, days: action.response.days}

		case 'CHANGE_DAYS_COUNT':
			return {...state, daysCount: action.response.count, days: action.response.days}

		case 'CHANGE_DELIVERY_TIMES':
			return {...state, deliveryStart: action.response.deliveryStart, deliveryEnd: action.response.deliveryEnd}

		default:
			return state
	}
}