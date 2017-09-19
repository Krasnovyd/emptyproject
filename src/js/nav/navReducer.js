const initialState = {
	links: [
		{
			id: 'home',
			name: 'Home'
		},
		{
			id: 'features',
			name: 'Features'
		},
		{
			id: 'sample',
			name: 'Sample'
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