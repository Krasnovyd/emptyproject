import React, { Component } from 'react'
import clock from 'icons/clock.svg'

export default class NavOuter extends Component {
	render() {
		return(
			<div className='navbar-outer d-flex justify-content-between'>
				<div className='navbar-outer--side d-flex align-items-center pl-2'>Выберите город: Житомир</div>
				<div className='navbar-outer--logo'></div>
				<div className='navbar-outer--side d-flex align-items-center'>
					<img className='navbar-outer--side-img' src={ clock } alt=''/>
					<span>Рабочее время: 10:00–19:00</span>
					{/*
						<span>+38(067) 404 1 303</span>
					*/}
				</div>
			</div>
		)
	}
}