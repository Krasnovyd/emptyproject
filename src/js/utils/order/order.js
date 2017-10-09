import React, { Component } from 'react'
import { connect } from 'react-redux'
import { validateField, validateForm } from 'validation'
import ErrorMessage from 'errorMessage'

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
		let url = '/hello';
		http.open('POST', url, true);

		//Send the proper header information along with the request
		http.setRequestHeader('Content-type', 'application/json');

		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				console.log('DANGER!!!', http.responseText);
			}
		}

		form.menu = this.props.menu.selectedMenu

		console.log('SAVED!!!', form)
		// http.send(JSON.stringify(form));
	}

	handleShowDetails = (bool) => {
		this.setState({showDetails: bool})
	}

	render() {
		const menu = this.props.menu
		const form = this.state.form

		return(
			<div className='modal fade order' id='order' role='dialog' aria-hidden='true'>
				<div className='modal-dialog order--dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								{ `Оформление заказа - "${menu.selectedMenu}"` }
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
								{/*
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
								{/*
									<div className='form-group'>
										<div className='row'>
											<label>Доставка: (Минимальный интервал доставки — 2 часа)</label>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<Select
													name='form-field-name'
													value={ menu.startTime }
													options={ menu.deliveryTime }
													onChange={ this.handleChangeSelect } />
											</div>
											<div className='col-md-6'>
												<Select
													name='form-field-name'
													value={ menu.startTime }
													options={ menu.deliveryTime }
													onChange={ this.handleChangeSelect } />
											</div>
										</div>
									</div>
								*/}
							</form>
						</div>
						<div className='order-details'>
							{
								this.state.showDetails ?
								<div className='order-details--list'>
									<p><b>Меню: </b>{ menu.selectedMenu }</p>
									<p><b>Количество дней: </b>{ parseInt(menu.daysCount) }</p>
									{
										menu.weekendsOff ?
										<p><b>Доставка с пн-пт</b></p>
										: null
									}
									<p><b>Сумма к оплате: </b>{ '6000грн' }</p>
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

export default connect(mapStateToProps)(Order)