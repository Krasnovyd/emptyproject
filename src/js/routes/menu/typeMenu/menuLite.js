import React, { Component } from 'react'

export default class MenuLite extends Component {
	constructor(props) {
		super(props)

		this.state = {
			days: {
				'пн': {
					menu: [
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						}
					]
				},
				'вт': {
					menu: [
						{
							name: 'tuesday',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'tuesday',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'tuesday',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'tuesday',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						}
					]
				},
				'ср': {
					menu: [
						{
							name: 'sreda',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						}
					]
				},
				'чт': {
					menu: [
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						}
					]
				},
				'пт': {
					menu: [
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						}
					]
				},
				'сб': {
					menu: [
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						}
					]
				},
				'вс': {
					menu: [
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						},
						{
							name: 'Гречневая каша с грецким орехом',
							info: {
								kkal: 314,
								b: 12,
								j: 3,
								y: 49
							}
						}
					]
				}
			}
		}
	}

	render() {
		const menu = this.state.days[this.props.selectedDay].menu
		const total = {
			kkal: 0,
			b: 0,
			j: 0,
			y: 0
		}

		menu.forEach(menu => {
			total.kkal += menu.info.kkal
			total.b += menu.info.b
			total.j += menu.info.j
			total.y += menu.info.y
		})

		return(
			<div className='menu-content'>
				<div className='container'>
					<div className='row'>
						{
							menu.map((obj, index) => {
								return (
									<div key={ index } 
											className='menu-content--day col-lg-3 col-md-6'>
										<p className='menu-content--day-title'>{ obj.name }</p>
										<div className='menu-content--day-info'>
											<span>{ obj.info.kkal + ' ккал'}</span>
											<span>{ obj.info.b + ' б'}</span>
											<span>{ obj.info.j + ' ж'}</span>
											<span>{ obj.info.y + ' у'}</span>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
				<div className='d-flex justify-content-center'>
					<div className='info-circle d-flex flex-column'>
						<span>{ total.kkal }</span>
						<small>ккал</small>
					</div>
					<div className='info-circle d-flex flex-column justify-content-end'>
						<span className='small'>{ total.b }</span>
						<small>белки</small>
					</div>
					<div className='info-circle d-flex flex-column justify-content-end'>
						<span className='small'>{ total.j }</span>
						<small>жири</small>
					</div>
					<div className='info-circle d-flex flex-column justify-content-end'>
						<span className='small'>{ total.y }</span>
						<small>углеводы</small>
					</div>
				</div>
			</div>
		)
	}
}