import React, { Component } from 'react'
import About from './routes/about/about'
import Footer from './routes/footer/footer'
import Home from './routes/home/home'
import Nav from './nav/nav'
import Order from './order/order'

export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				<Nav />
				<div id='container'>
					<Home />
					<section id='sample'>1</section>
					<section id='features'>2</section>
					<About />
				</div>
				<Footer />
				<Order />
			</div>
		)
	}
}