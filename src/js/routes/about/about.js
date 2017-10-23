import React, { Component } from 'react'
import scale from 'icons/scale.svg'
import stew from 'icons/stew.svg'
import delivery from 'icons/delivery.svg'

export default class About extends Component {
	render() {
		return(
			<section id='about' className='pt-4 pb-4'>
				<div className='container'>
					<h2 className='text-center mb-4'>Наши преимущества</h2>
					<div className='row'>
						<div className='col'>
							<div className='about--icon'>
								<img src={ scale } alt=''/>
							</div>
							<div className='about--description'>
								<h4>Отсутствие замороженных продуктов</h4>
								<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
							</div>
						</div>
						<div className='col'>
							<img className='about--icon' src={ scale } alt=''/>
							<div className='about--description'>
								<h4>Отсутствие замороженных продуктов</h4>
								<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col'>
							<img className='about--icon' src={ stew } alt=''/>
							<div className='about--description'>
								<h4>Отсутствие замороженных продуктов</h4>
								<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
							</div>
						</div>
						<div className='col'>
							<img className='about--icon' src={ delivery } alt=''/>
							<div className='about--description'>
								<h4>Отсутствие замороженных продуктов</h4>
								<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}