const initialState = {
	links: [
		{
			id: 'howItWork',
			name: 'Как это работает'
		},
		{
			id: 'menu',
			name: 'Меню'
		},
		{
			id: 'about',
			name: 'Наши преимущества'
		},
		{
			id: 'footer',
			name: 'Контакты'
		}
	]
}

export default function nav(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}