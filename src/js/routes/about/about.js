import React, { Component } from 'react'
import scale from 'icons/scale.svg'
import stew from 'icons/stew.svg'
import delivery from 'icons/delivery.svg'

export default class About extends Component {
	render() {
		return(
			<section id='about' className='about pt-5 pb-4'>
				<div className='container'>
					{
					/*
						<h2 className='text-center mb-4'>О нас</h2>
					*/
					}
					<div className='row'>
						<div className='col'>
							<h3>Особенности правильного и здорового питания от Healthy Kitchen</h3>
							<ul>
								<li>Доставка здорового и сбалансированного питания Healthy Kitchen создана специально для людей, которые хотят правильно и разнообразно питаться, контролировать потребление калорий, белков, жиров и углеводов, и при этом не тратить время на покупку продуктов, приготовление еды и мойку посуды.</li>
								<li>В компании Healthy Kitchen при приготовлении блюд используются только свежие продукты. Так как еда занимает важное место в жизни людей и влияет на состояние здоровья. С Healthy Kitchen заказать правильное питание становится проще.</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}