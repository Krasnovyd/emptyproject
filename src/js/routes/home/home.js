import React, { Component } from 'react'

export default class Home extends Component {
	render() {
		return(
			<section id='home' className='home'>
				<div className='home--wrapper'>
					<div className='home--header container d-flex justify-content-center'>
						<div className='col-lg-10 col-md-12'>
							<h1>Здоровое питание каждый день</h1>
							<p>От 299грн</p>
							<button className='home--order' data-toggle='modal' data-target='#order'>
								Попробовать программу
							</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}