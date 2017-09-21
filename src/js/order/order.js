import React, { Component } from 'react'
import { connect } from 'react-redux'

class Order extends Component {
	render() {
		return(
			<div></div>
		)
	}
}

function mapStateToProps(state) {
	return {
		order: state.order
	}
}

export default connect(mapStateToProps)(Order)