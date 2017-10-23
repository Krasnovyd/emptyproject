import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from '../../routes/menu/menuActions'
import { validateField, validateForm } from 'validation'
import ErrorMessage from 'errorMessage'
import Select from 'react-select'

class Order extends Component {
	constructor(props) {
		super(props)

		this.state = {
			marked: false,
			showDetails: false,
			form: {
				firstName: {
					value: '',
					valid: true,
					rules: ['title', 'blank', 'long'],
					errors: []
				},
				lastName: {
					value: '',
					valid: true,
					rules: ['title', 'blank', 'long'],
					errors: []
				},
				phone: {
					value: '+380',
					valid: true,
					rules: ['blank', 'phone', 'phoneSize', 'long'],
					errors: []
				},
				email: {
					value: '',
					valid: true,
					rules: ['blank', 'email', 'long'],
					errors: []
				},
				address: {
					value: '',
					valid: true,
					rules: ['blank', 'long'],
					errors: []
				},
				promocod: {
					value: '',
					valid: true,
					rules: [],
					errors: []
				}
			}
		}
	}

	handleChange = (field, event) => {
		let state = this.state.form

		state[field].value = event.target.value
		if(this.state.marked){	
			state[field] = validateField(state[field])
		}

		this.setState({form: state})
	}

	onSubmit = () => {
		if(!this.state.marked){
			this.setState({marked: true})
		}

		let validated = validateForm(this.state.form)

		this.setState({form: validated.form})
		if(!validated.validCounter){
			this.submit(validated.serialized)
		}
	}

	submit = (form) => {
		let http = new XMLHttpRequest();
		let url = '/test.php';
		http.open('POST', url, true);

		//Send the proper header information along with the request
		http.setRequestHeader('Content-type', 'application/json');

		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				$('#order').modal('hide')
				// console.log('Response!!!', http.responseText);
			}
		}

		form.menu = this.props.menu.selectedMenu
		form.deliveryStart = this.props.menu.deliveryStart
		form.deliveryEnd = this.props.menu.deliveryEnd
		form.weekendsOff = this.props.menu.weekendsOff
		form.daysCount = this.props.menu.daysCount
		form.days = this.props.menu.days

		console.log('SAVED!!!', form)
		http.send(JSON.stringify(form));
	}

	handleShowDetails = (bool) => {
		this.setState({showDetails: bool})
	}

	handleChangeSelect = (type, event) => {
		let deliveryStart = this.props.menu.deliveryStart
		let deliveryEnd = this.props.menu.deliveryEnd

		if (type == 'deliveryStart') {
			if (this.props.menu.deliveryEnd - event.value <= 2) {
				deliveryEnd = event.value + 2
			}
			deliveryStart = event.value
		} else {
			if (event.value - this.props.menu.deliveryStart <= 2) {
				deliveryStart = event.value - 2
			}
			deliveryEnd = event.value
		}

		this.props.menuActions.changeDeliveryTimes(deliveryStart, deliveryEnd)
	}

	render() {
		const menu = this.props.menu
		const form = this.state.form
		let activeMenuIndex = 0

		menu.tabs.forEach((tab, index) => {
			if(tab.active) {
				activeMenuIndex = index
			}
		})

		let price = menu.days > 1 ? menu.tabs[activeMenuIndex].salePrice * menu.days : menu.tabs[activeMenuIndex].price

		return(
			<div className='modal fade order' id='order' role='dialog' aria-hidden='true'>
				<div className='modal-dialog order--dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								{ `Оформление заказа - ${menu.selectedMenu}` }
							</h5>
							<button type='button' className='order--close close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<form className='container'>
								<div className='form-group row'>
									<div className={ 'col-md-6 ' + ( form['firstName'].valid ? '' : 'validation-error') }>
										<label>Имя</label>
										<input className='form-control' 
													placeholder='Имя'
													value={ form['firstName'].value }
													onChange={ this.handleChange.bind(this, 'firstName') } />
										<ErrorMessage errors={ form['firstName'].errors } />
									</div>
									<div className={ 'col-md-6 ' + ( form['lastName'].valid ? '' : 'validation-error') }>
										<label>Фамилия</label>
										<input className='form-control' 
													placeholder='Фамилия'
													value={ form['lastName'].value }
													onChange={ this.handleChange.bind(this, 'lastName') } />
										<ErrorMessage errors={ form['lastName'].errors } />
									</div>
								</div>
								<div className='form-group row'>
									<div className={ 'col-md-6 ' + ( form['phone'].valid ? '' : 'validation-error') }>
										<label>Контактный телефон</label>
										<input className='form-control' 
													placeholder='Контактный телефон'
													value={ form['phone'].value }
													onChange={ this.handleChange.bind(this, 'phone') } />
										<ErrorMessage errors={ form['phone'].errors } />
									</div>
									<div className={ 'col-md-6 ' + ( form['email'].valid ? '' : 'validation-error') }>
										<label>Электронная почта</label>
										<input className='form-control' 
													placeholder='Электронная почта'
													value={ form['email'].value }
													onChange={ this.handleChange.bind(this, 'email') } />
										<ErrorMessage errors={ form['email'].errors } />
									</div>
								</div>
								<div className='form-group row'>
									<div className={ 'col ' + ( form['address'].valid ? '' : 'validation-error') }>
										<label>Адрес доставки</label>
										<input className='form-control' 
													placeholder='Адрес доставки'
													value={ form['address'].value }
													onChange={ this.handleChange.bind(this, 'address') } />
										<ErrorMessage errors={ form['address'].errors } />
									</div>
								</div>
								<div className='form-group row'>
									<div className={ 'col ' + ( form['promocod'].valid ? '' : 'validation-error') }>
										<label>Промокод</label>
										<input className='form-control' 
													placeholder='SALE-COD'
													value={ form['promocod'].value }
													onChange={ this.handleChange.bind(this, 'promocod') } />
										<ErrorMessage errors={ form['promocod'].errors } />
									</div>
								</div>
								{/*
									<div className='form-group row'>
										<div className={ 'col ' + ( form['comment'].valid ? '' : 'validation-error') }>
											<label>Комментарий к заказу</label>
											<textarea className='form-control'
																value={ form['comment'].value }
																onChange={ this.handleChange.bind(this, 'comment') }></textarea>
											<ErrorMessage errors={ form['comment'].errors } />
										</div>
									</div>
								*/}
								<div className='form-group form-group--delivery'>
									<div>
										<label>Доставка: <small>(Минимальный интервал доставки — 2 часа)</small></label>
									</div>
									<div className='row'>
										<div className='col-md-6 mb-2'>
											<Select
												name='form-field-name'
												value={ menu.deliveryStart }
												options={ menu.deliveryStartTimes }
												clearable={ false }
												onChange={ this.handleChangeSelect.bind(null, 'deliveryStart') } />
										</div>
										<div className='col-md-6'>
											<Select
												name='form-field-name'
												value={ menu.deliveryEnd }
												options={ menu.deliveryEndTimes }
												clearable={ false }
												onChange={ this.handleChangeSelect.bind(null, 'deliveryEnd') } />
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className='order-details'>
							{
								this.state.showDetails ?
								<div className='order-details--list'>
									<p><b>Меню: </b>{ menu.selectedMenu }</p>
									<p><b>Количество дней: </b>{ menu.days }</p>
									{
										menu.weekendsOff ?
										<p><b>Доставка с пн-пт</b></p>
										: null
									}
									<p><b>Сумма к оплате: </b>{ price } грн</p>
									<p><b>Доставка: </b> с { menu.deliveryStart }:00 до { menu.deliveryEnd }:00</p>
									<p onClick={ this.handleShowDetails.bind(null, false) }
													className='order-details--hide'>
										Скрыть детали
									</p>
								</div>
								: 
								<p onClick={ this.handleShowDetails.bind(null, true) }
												className='order-details--show'>
									Показать детали заказа
								</p>
							}
						</div>
						<div className='d-flex justify-content-center p-3'>
							<button 
								className='order--success' 
								onClick={ this.onSubmit }>ЗАКАЗАТЬ</button>
						</div>
					</div>
				</div>
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order)