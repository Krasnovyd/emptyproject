import React, { Component } from 'react'
import menu from 'icons/menu.svg'
import cook_hat from 'icons/cook_hat.svg'
import delivery from 'icons/delivery.svg'
import food from 'icons/food.svg'

export default class HowItWork extends Component {
	render() {
		return(
			<section id='howItWork' className='work pt-5 pb-5'>
				<div className='container'>
					<h2 className='text-center mb-4'>Как это работает</h2>
					<div className='row'>
						<div className='col-sm-3'>
							<div className='work--icon'>
								<img src={ menu } alt='' />
							</div>
							<div className='work--description'>
								<p>Вы выбираете программу под ваши задачи</p>
							</div>
						</div>
						<div className='col-sm-3'>
							<div className='work--icon'>
								<img src={ cook_hat } alt='' />
							</div>
							<div className='work--description'>
								<p>Мы готовим еду для вас, раскладываем по порциям</p>
							</div>
						</div>
						<div className='col-sm-3'>
							<div className='work--icon'>
								<img src={ delivery } alt='' />
							</div>
							<div className='work--description'>
								<p>Бесплатно доставляем в любую точку города с 6:00 до 10:00</p>
							</div>
						</div>
						<div className='col-sm-3'>
							<div className='work--icon'>
								<img src={ food } alt='' />
							</div>
							<div className='work--description'>
								<p>Вы правильно питаетесь без усилий в течение всего дня</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}