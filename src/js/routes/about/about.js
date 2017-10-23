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
							<h3>Компания HEALTHY KITCHEN</h3>
							<p>Это правильное полезное питание с доставкой на дом. Основной принцип, которого придерживается сервис, – приготовление комплексного и доступного каждому питания. В итоге получился качественный продукт, который подходит как спортсменам, так и простым людям. Наше правильное питание улучшит результаты профессионалов, а активным людям поможет поддерживать спортивную форму и покорять новые вершины.</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}