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

export function selectedMenu(type) {
	return (dispatch) => {
		return dispatch({
			type: 'SELECTED_MENU',
			response: type
		})
	}
}