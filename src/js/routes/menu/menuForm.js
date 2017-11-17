import React, { Component } from 'react'
import MenuDay from './menuDay'

export default class MenuForm extends Component {
	render() {
		const menu = this.props.days[this.props.selectedDay].menu
		const total = {
			kkal: 0,
			b: 0,
			j: 0,
			y: 0
		}

		menu.forEach(menu => {
			if (menu.list) {
				menu.list.forEach(menuDay => {
					total.kkal += menuDay.info.kkal
					total.b += menuDay.info.b
					total.j += menuDay.info.j
					total.y += menuDay.info.y
				})
			} else {
				total.kkal += menu.info.kkal
				total.b += menu.info.b
				total.j += menu.info.j
				total.y += menu.info.y
			}
		})

		return(
			<div>
				<div className='menu-content--container container'>
					<div className='row'>
						{
							menu.map((obj, index) => {
								return (
									<div key={ index } className='menu-content--day col-lg-3 col-md-6'>
										{/*<p className='menu-content--day-number mb-0'>{ index + 1 }:</p>*/}
										{
											obj.list ? 
											obj.list.map((listDay, i) => {
												return (
													<MenuDay key={ i } day={ listDay } />
												)
											})
											: <MenuDay day={ obj } />
										}
									</div>
								)
							})
						}
					</div>
				</div>
				{
					this.props.days.name != 'business' ?	
					<div className='menu-content--info d-flex container'>
						<div className='menu-content--info-total'>
							<b>За день:</b>
						</div>
						<div className='d-flex'>
							<div className='d-flex flex-column menu-content--info-column col-md-4'>
								<b>{ total.kkal }</b>
								<small>ккалорий</small>
							</div>
							<div className='d-flex flex-column menu-content--info-column col-md-4'>
								<b>{ total.b }</b>
								<small>белки</small>
							</div>
							<div className='d-flex flex-column menu-content--info-column col-md-4'>
								<b>{ total.j }</b>
								<small>жиры</small>
							</div>
							<div className='d-flex flex-column menu-content--info-column col-md-4'>
								<b>{ total.y }</b>
								<small>углеводы</small>
							</div>
						</div>
					</div>
					: null
				}
			</div>
		)
	}
}