import React, { Component } from 'react'
import About from './routes/about/about'
import Nav from './nav/nav'
import Order from './order/order'

export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				<Nav />
				<div id='container'>
					<section id='home'></section>
					<section id='sample'></section>
					<section id='features'></section>
					<About />
				</div>
				<Order />
			</div>
		)
	}
}