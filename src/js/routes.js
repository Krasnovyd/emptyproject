export const createRoutes = () => ({
	childRoutes: [{
		path: '/',
		component: require('./app').default,
		childRoutes: []
	}]
})