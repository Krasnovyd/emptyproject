import * as regularExpression from 'regularExpression'

const validateErrors = {
	title: 'Не валидное поле.',
	blank: 'Это поле должно быть заполнено.',
	email: 'Не корректный email.',
	phone: 'Не корректный номер.',
	phoneSize: 'Не корректный номер.',
	long: 'This value is too long. It should have 255 characters or less.',
	short: 'This value is too short. It should have 5 characters or more.'
}

export function validateField(data) {
	let obj = data

	obj.errors = []

	obj.rules.forEach((rule) => {
		if(!regularExpression[rule].test(obj.value)){
			obj.errors.push(validateErrors[rule])
		}
	})

	obj.valid = !obj.errors.length

	return obj
}

export function validateForm(data) {
	let form = data
	let validCounter = 0
	let serialized = {}

	for(let key in form){
		form[key] = validateField(form[key])
		if(!form[key].valid){
			validCounter++
		} else {
			serialized[key] = form[key].value
		}
	}

	return {form: form, validCounter: validCounter, serialized: serialized}
}