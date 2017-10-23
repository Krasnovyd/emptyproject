import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from './menuActions'
import Select from 'react-select'
import MenuFitness from './typeMenu/menuFitness'
import MenuBalance from './typeMenu/menuBalance'
import MenuStrong from './typeMenu/menuStrong'
import MenuForm from './menuForm'

class Menu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
			selectedDay: 'пн',
			typeMenu: {
				0: MenuFitness,
				1: MenuBalance,
				2: MenuStrong
			},
			daysOptions: [
				{ value: '1 day', label: '1 день', days: 1 },
				{ value: '1 week', label: '5 дней', days: 5  },
				{ value: '2 week', label: '10 дней', days: 10 },
				{ value: '3 week', label: '15 дней', days: 15 },
				{ value: '4 week', label: '20 дней', days: 20 }
			],
			daysOptionsWeekendsOff: [
				{ value: '1 day', label: '1 день', days: 1 },
				{ value: '1 week', label: '7 дней', days: 7 },
				{ value: '2 week', label: '14 дней', days: 14 },
				{ value: '3 week', label: '21 день', days: 21 },
				{ value: '4 week', label: '28 дней', days: 28 }
			]
		}
	}

	changeDay = (day) => {
		this.setState({selectedDay: day})
	}

	weekendsOff = () => {
		let days = this.props.menu.days

		if(this.state.selectedDay == 'сб' || this.state.selectedDay == 'вс') {
			this.setState({selectedDay: 'пн'})
		}

		if(!this.props.menu.weekendsOff && days > 1) {
			days = days - days / 7 * 2
		} else if (days > 1) {
			days = days + days / 5 * 2
		}

		this.props.menuActions.weekendsOff(this.props.menu.weekendsOff, days)
	}

	handleChangeSelect = (event) => {
		this.props.menuActions.changeDaysCount(event.value, event.days)
	}

	render() {
		const menuActions = this.props.menuActions
		const menu = this.props.menu
		const daysOptions = menu.weekendsOff ? this.state.daysOptions : this.state.daysOptionsWeekendsOff
		let activeMenuIndex = 0

		menu.tabs.forEach((tab, index) => {
			if(tab.active) {
				activeMenuIndex = index
			}
		})

		let salePrice = menu.tabs[activeMenuIndex].salePrice
		let price = menu.days > 1 ? salePrice * menu.days : menu.tabs[activeMenuIndex].price

		return(
			<section id='menu' className='menu pt-4 pb-4'>
				<div className='container'>
					<h2 className='text-center mb-4'>Меню</h2>
					<ul className='menu--tabs d-flex justify-content-center'>
						{
							menu.tabs.map((tab, index) => {
								return (
									<li key={ index }
											className={ 'menu--tab ' + (tab.active ? 'active' : '') }
											onClick={ menuActions.changeTab.bind(null, menu.tabs, index) }>
										<p className='menu--tab-title'>{ tab.title }</p>
										<small className='menu--tab-sub'>{ tab.sub }</small>
									</li>
								)
							})
						}
					</ul>
					<div className='menu--container d-flex'>
						<ul className='menu--days'>
							{
								this.state.days.map((day, index) => {
									let disabled = (day == 'сб' || day == 'вс') && menu.weekendsOff

									return (
										<li key={ index }
												className={ 
													(day == this.state.selectedDay ? 'active ' : '') +
													(disabled ? 'disabled' : '')
												}
												onClick={ this.changeDay.bind(null, day) }>
											{ day }
										</li>
									)
								})
							}
						</ul>
						<div className='menu-content'>
							<MenuForm days={ this.state.typeMenu[activeMenuIndex] }
												selectedDay={ this.state.selectedDay } />
							<div className='menu--order container'>
								<div className='row'>
									<div className='col menu--order-checkbox' title='Доставка с пн-пт'>
										<input className='checkbox'
													onChange={ () => {} }
													checked={ menu.weekendsOff }
													type='checkbox' />
										<label onClick={ this.weekendsOff }>Без выходных</label>
									</div>
									<div className='col'>
										<Select
											value={ menu.daysCount }
											options={ daysOptions }
											clearable={ false }
											onChange={ this.handleChangeSelect } />
									</div>
									<div className='col menu--order-sum'>
										<div className='d-flex flex-column'>
											<b>{ menu.days > 1 ? salePrice : price } грн/день</b>
											<small>Всего: { price } грн</small>
										</div>
									</div>
									<div className='col menu--order-order'>
										<button data-toggle='modal'
														data-target='#order'
														className='menu--order-button'
														onClick={ menuActions.prepareOrder.bind(null, menu.tabs) }>ЗАКАЗАТЬ</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		menu: state.menu
	}
}

function mapDispatchToProps(dispatch) {
	return {
		menuActions: bindActionCreators(menuActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)