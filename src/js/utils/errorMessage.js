import React, { Component } from 'react'

export default class ErrorMessage extends Component {
	render() {
		let errors = this.props.errors

		return (
			errors.length ?
				<div>
					{
						errors.map((error, index) => {
							return (
								<small key={ index } className='validation-error--message'>
									{ error }
								</small>
							)
						})
					}
				</div>
			: null
		)
	}
}