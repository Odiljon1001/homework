let cards = document.querySelectorAll('.card')
let colors = [
	'red',
	'blue',
	'aqua',
	'green',
	'gray',
	'black',
	'indigo',
	'purple',
	'yellow',
	'brown',
	'orange',
]

function rand() {
	let i = Math.floor(Math.random() * colors.length)
	return colors[i]
}

function randColors() {
	cards.forEach(card => {
		card.style.background = rand()
	})
}

// let randbtn = document.querySelector('.randbtn')
// randbtn.addEventListener('click', randColors)

cards.forEach(card => {
	card.addEventListener('click', () => {
		card.style.background = rand()
	})
})
