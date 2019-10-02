function csvToJSON(input) {
	let lines = input.split('\n')
	// console.log(lines)
	let result = []
	let headers = lines[0].split(', ')
	// console.log(headers)
	for (let i = 1; i < lines.length; i++) {
		let obj = {}
		let currentline = lines[i].split(', ')
		for (let j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentline[j]
		}
		result.push(obj)
	}

	let resultSorted = result.sort((a, b) => a.PRICE - b.PRICE)
	console.log(resultSorted)

	return JSON.stringify(resultSorted)
}

const csv =
	'NAME, CATEGORY, PRICE\nXiaomi Redmi 5A, Smartphone, 1199000\nMacbook Air, Laptop, 13775000\nSamsung Galaxy J7, Smartphone, 3549000\nDELL XPS 13, Laptop, 26799000\nXiaomi Mi 6, Smartphone, 5399000\nLG V30 Plus, Smartphone, 10499000'

csvToJSON(csv)
