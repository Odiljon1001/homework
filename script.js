let son = +prompt('Nechta misol yechasiz')

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

let operations = ['+', '-', '*', '/', '%']

for (let i = 0; i < son; i++) {
	let operation = operations[randomNumber(0, 4)]
	let num1 = randomNumber(1, 100)
	let num2 = randomNumber(1, 100)

	let misol = +prompt(`${num1 + operation + num2}=?`)
	let result = eval(num1 + operation + num2)

	if (misol == result) {
		console.log(`Sizning javob to'g'ri ${misol}`)
	} else
		console.log(`Sizning javob no to'g'ri ${misol} to'g'ri javob ${result}`)

	console.log(`Misol: ${num1} ${operation} ${num2}`)
}
let userNum = +prompt("Foydalanuvchilar soni");

for (let i = 0; i <= userNum; i++) {
  let name = prompt("User name", "Ivan");
  let age = +prompt("User age", "30");
  console.log(`${i+1} Foydalanuvchi ismi ${name}:
Foydalanuvchi yoshi ${age}  `);
}

const priceList = cartObj()
console.log(priceList)
let totalPrice = 0
let dastavaka = 9000
let product = ''

for (const key in priceList) {
	totalPrice += priceList[key].price
	product += ` ${key}: ${priceList[key].info}`
}

let jami = totalPrice + dastavaka

console.log(`Sizning harid qilgan maxsulotingiz ${product}
jami sumangiz ${jami} som undan ${dastavaka} som yetqazib berish narxi`)
