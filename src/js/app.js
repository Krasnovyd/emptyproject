import React, { Component } from 'react'
import About from './routes/about/about'
import Footer from './routes/footer/footer'
import Home from './routes/home/home'
import Menu from './routes/menu/menu'
import Nav from './routes/nav/nav'
import NavOuter from './routes/nav/navOuter'
import Order from 'order/order'

export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				<NavOuter />
				<Nav />
				<div id='container'>
					<Home />
					<section id='features'>2</section>
					<Menu />
					<About />
				</div>
				<Footer />
				<Order />
			</div>
		)
	}
}