import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
	handleScroll(target) {
		let heightTarget = document.getElementById(target).offsetTop - 56
		let bodyScroll = document.body.scrollTop
		let speed = 20
		let step = (heightTarget - bodyScroll) / (500 / speed)

		let start = setInterval(() => {
			bodyScroll += step

			if(step > 0 ? bodyScroll >= heightTarget : bodyScroll <= heightTarget){
				bodyScroll = heightTarget
				clearInterval(start)
			}

			document.body.scrollTop = bodyScroll
		}, speed)
	}

	render() {
		return(
			<nav id='navbar' className='navbar navbar-expand-lg fixed-top'>
				<a className='navbar-brand'>LOGO</a>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
					<ul className='navbar-nav'>
						{
							this.props.nav.links.map((item, index) => {
								return (
									<li className='nav-item'
										key={ index }
										onClick={ this.handleScroll.bind(null, item.id) }>
										<a className='nav-link'>
											{ item.name }
										</a>
									</li>
								)
							})
						}
					</ul>
					{/*
					<button type='button' className='btn btn-primary' data-toggle='modal' data-target='#order'>
						Launch demo modal
					</button>
					*/}
				</div>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		nav: state.nav
	}
}

export default connect(mapStateToProps)(Nav)