import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return(
			<footer className='footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<address>
								<p><strong>Город:</strong> Житомир</p>
								<p><strong>Email:</strong> healthykitchen.zt@gmail.com</p>
								<p><strong>Тел:</strong> +38(067) 404 1 303</p>
							</address>
						</div>
						<div className='col-6'>
						</div>
					</div>
					<div>
						<p className='footer--copy'>
							Healthy Kitchen &copy; 2017.
						</p>
					</div>
				</div>
			</footer>
		)
	}
}