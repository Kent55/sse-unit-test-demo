function add (num1, num2) {
	return num1 + num2
}

function resolveWithValue (value) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(value)
		}, 5000)
	})
}

module.exports = {
	add,
	resolveWithValue
}