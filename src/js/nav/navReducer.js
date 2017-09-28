const initialState = {
	links: [
		{
			id: 'home',
			name: 'Home'
		},
		{
			id: 'sample',
			name: 'Sample'
		},
		{
			id: 'features',
			name: 'Features'
		},
		{
			id: 'about',
			name: 'Наши преимущества'
		}
	]
}

export default function nav(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}