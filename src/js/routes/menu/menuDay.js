import React, { Component } from 'react'

export default class MenuDay extends Component {
	render() {
		const menuDay = this.props.day

		return(
			<div className='mb-2'>
				<p className='menu-content--day-title'>{ menuDay.name }</p>
				<img className='menu-content--day-photo' src={ menuDay.photo } />
				<div className='menu-content--day-info'>
					<span>{ menuDay.info.kkal + ' ккал'}</span>
					<span>{ menuDay.info.b + ' б'}</span>
					<span>{ menuDay.info.j + ' ж'}</span>
					<span>{ menuDay.info.y + ' у'}</span>
				</div>
			</div>
		)
	}
}