import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

class Order extends Component {
	handleChangeSelect = (val) => {
		console.log(val)
	}

	render() {
		const order = this.props.order
		const menuSelected = order.menus.find(cur => {
			return cur.value == order.selectedMenu
		})

		return(
			<div className='modal fade order' id='order' role='dialog' aria-hidden='true'>
				<div className='modal-dialog order--dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								{ `Оформление заказа - "${menuSelected.label}"` }
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<form>
								<div className='form-group row'>
									<div className='col'>
										<label>First name</label>
										<input type='text' className='form-control' placeholder='First name' />
										<div className='invalid-feedback'>
											Please provide a valid city.
										</div>
									</div>
									<div className='col'>
										<label>Last name</label>
										<input type='text' className='form-control' placeholder='Last name' />
										<div className='invalid-feedback'>
											Please provide a valid city.
										</div>
									</div>
								</div>
								<div className='form-group row'>
									<div className='col'>
										<label>Phone number</label>
										<input type='number' className='form-control' placeholder='Phone' />
										<div className='invalid-feedback'>
											Please provide a valid city.
										</div>
									</div>
									<div className='col'>
										<label>Email address</label>
										<input type='email' className='form-control' placeholder='Enter email' />
									</div>
								</div>
								<div className='form-group row'>
									<div className='col'>
										<label>Address</label>
										<input type='text' className='form-control' placeholder='Address' />
										<div className='invalid-feedback'>
											Please provide a valid city.
										</div>
									</div>
								</div>
								<div className='form-group row'>
									<div className='col'>
										<label>Промокод</label>
										<input type='text' className='form-control' placeholder='SALE-COD' />
										<div className='invalid-feedback'>
											Please provide a valid city.
										</div>
									</div>
								</div>
								{/*
									<div className='form-group'>
										<div className='row'>
											<label>Доставка: (Минимальный интервал доставки — 2 часа)</label>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<Select
													name='form-field-name'
													value={ order.startTime }
													options={ order.deliveryTime }
													onChange={ this.handleChangeSelect } />
											</div>
											<div className='col-md-6'>
												<Select
													name='form-field-name'
													value={ order.startTime }
													options={ order.deliveryTime }
													onChange={ this.handleChangeSelect } />
											</div>
										</div>
									</div>
								*/}
							</form>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-dismiss='modal'>Отмена</button>
							<button type='button' className='btn btn-primary'>Оформить заказ</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		order: state.order
	}
}

export default connect(mapStateToProps)(Order)