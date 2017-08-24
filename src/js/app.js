import React, { Component } from 'react'
import Nav from './nav/nav'

export default class App extends Component {
	render() {
		return(
			<div className='wrapper'>
				<Nav />
				<div className='container' id='container' style={{paddingTop: '56px'}}>
					<section id='home' style={{height: '800px', border: '1px solid black'}}></section>
					<section id='sample' style={{height: '800px', border: '1px solid black'}}></section>
					<section id='features' style={{height: '800px', border: '1px solid black'}}></section>
					<section id='signup' style={{height: '800px', border: '1px solid black'}}></section>
				</div>
			</div>
		)
	}
}