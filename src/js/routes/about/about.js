import React, { Component } from 'react'
import scale from 'icons/scale.svg'
import snowflake from 'icons/snowflake.svg'
import stew from 'icons/stew.svg'
import delivery from 'icons/delivery.svg'

export default class Nav extends Component {
	render() {
		return(
			<section id='about' className='container'>
				<div className='row'>
					<div className='col'>
						<div className='about--img about--img-none'>
							<img src={ snowflake } alt=''/>
						</div>
						<div className='about--text'>
							<h4>Отсутствие замороженных продуктов</h4>
							<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
						</div>
					</div>
					<div className='col'>
						<img className='about--img' src={ scale } alt=''/>
						<div className='about--text'>
							<h4>Отсутствие замороженных продуктов</h4>
							<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<img className='about--img' src={ stew } alt=''/>
						<div className='about--text'>
							<h4>Отсутствие замороженных продуктов</h4>
							<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
						</div>
					</div>
					<div className='col'>
						<img className='about--img' src={ delivery } alt=''/>
						<div className='about--text'>
							<h4>Отсутствие замороженных продуктов</h4>
							<p>Еда играет важную роль в жизни каждого человека и влияет на состояние здоровья, поэтому наша компания не использует заморозку, а для приготовления блюд отдает предпочтение исключительно свежим продуктам. Мы – за высокое качество!</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}