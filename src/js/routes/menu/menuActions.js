// import { CALL_API } from 'api'
// const workflowEndpoint = '/api/task/workflow'

// function createWorkflowFetch(data) {
// 	return {
// 		[CALL_API]: {
// 			types: [ 'SEND_WORKFLOW_CREATE', 'SEND_WORKFLOW_CREATE_SUCCESS', 'SEND_WORKFLOW_CREATE_FAIL' ],
// 			endpoint: workflowEndpoint,
// 			method: 'post',
// 			data: data
// 		}
// 	}
// }

// export function createWorkflow(id, successAction, data) {
// 	return (dispatch) => {
// 		return dispatch(createWorkflowFetch(data))
// 			.then(data => {
// 				if (data.type === 'SEND_WORKFLOW_CREATE_SUCCESS') {
// 					EE.emit('ADD_ALERT', 'Ticket created', null, 'success', 5000)
// 					if(successAction)
// 						successAction()
// 				}
// 			})
// 	}
// }

export function prepareOrder(tabs) {
	return (dispatch) => {
		const selectedMenu = tabs.find(cur => {
			return cur.active
		})

		return dispatch({
			type: 'PREPARE_ORDER',
			response: {
				selectedMenu: selectedMenu.title
			}
		})
	}
}

export function changeTab(tabs, activeIndex) {
	return (dispatch) => {
		tabs.map((tab, index) => {
			tab.active = activeIndex == index
			return tab
		})

		return dispatch({
			type: 'CHANGE_TAB',
			response: {
				tabs
			}
		})
	}
}

export function weekendsOff(bool) {
	return (dispatch) => {
		return dispatch({
			type: 'WEEKENDS_OFF',
			response: {
				weekendsOff: !bool
			}
		})
	}
}

export function changeDaysCount(count) {
	return (dispatch) => {
		return dispatch({
			type: 'CHANGE_DAYS_COUNT',
			response: {
				count
			}
		})
	}
}

export function changeDeliveryTimes(deliveryStart, deliveryEnd) {
	return (dispatch) => {
		return dispatch({
			type: 'CHANGE_DELIVERY_TIMES',
			response: {
				deliveryStart,
				deliveryEnd
			}
		})
	}
}