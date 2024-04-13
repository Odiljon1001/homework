function theTwoLargestNumbers() {
	let input = prompt('joy tashab sonlar kiriting:').split(' ').map(Number)
	console.log(input)
	if (!input.every(num => !isNaN(num))) {
		return 'Faqat son kiriting.'
	}

	let sortedNumbers = input.sort((a, b) => b - a)

	let largestNumbers = sortedNumbers.slice(0, 2)

	return largestNumbers
}

console.log(theTwoLargestNumbers())
