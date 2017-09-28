import React, { Component } from 'react'

export default class Home extends Component {
	render() {
		return(
			<section id='home' className='home'>
				<div className='home--header'>
					<h1>Здоровое питание каждый день</h1>
					<p>От 250грн</p>
					<button className='home--order' data-toggle='modal' data-target='#order'>
						Попробовать программу
					</button>
				</div>
			</section>
		)
	}
}