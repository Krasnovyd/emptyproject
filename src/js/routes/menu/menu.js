import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from './menuActions'
import MenuLite from './typeMenu/menuLite'
import MenuStr from './typeMenu/menuStr'
import MenuHard from './typeMenu/menuHard'

class Menu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
			selectedDay: 'пн'
		}
	}

	changeDay = (day) => {
		this.setState({selectedDay: day})
	}

	render() {
		const menuActions = this.props.menuActions
		const menu = this.props.menu

		return(
			<section id='menu' className='menu pt-4 pb-4'>
				<div className='container'>
					<ul className='menu--tabs d-flex justify-content-start'>
						{
							menu.tabs.map((tab, index) => {
								return (
									<li key={ index }
											className={ 'menu--tab ' + (tab.active ? 'active' : '') }
											onClick={ menuActions.changeTab.bind(null, menu.tabs, index) }>
										<p className='menu--tab-title'>{ tab.title }</p>
										<small className='menu--tab-sub'>{ tab.sub }</small>
										<div className='menu--tab-border menu--tab-border-left'></div>
										<div className='menu--tab-border menu--tab-border-right'></div>
									</li>
								)
							})
						}
					</ul>
					<div className='menu--container d-flex'>
						<ul className='menu--days'>
							{
								this.state.days.map((day, index) => {
									return (
										<li key={ index }
												className={ day == this.state.selectedDay ? 'active' : '' }
												onClick={ this.changeDay.bind(null, day) }>
											{ day }
										</li>
									)
								})
							}
						</ul>
						{
							menu.tabs[0].active ?
							<MenuLite selectedDay={ this.state.selectedDay } />
							: null
						}
						{
							menu.tabs[1].active ?
							<MenuStr selectedDay={ this.state.selectedDay } />
							: null
						}
						{
							menu.tabs[2].active ?
							<MenuHard />
							: null
						}
					</div>
					<div className='menu--order'>
						<button data-toggle='modal'
										data-target='#order'
										onClick={ menuActions.prepareOrder.bind(null, menu.tabs) }>Order</button>
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