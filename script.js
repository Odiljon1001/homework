// let str = 'salom bolajonlar salom nima gap salom yaxshimisan'
// let arr = str.split('')
// // console.log(arr);
// let box = []
// for (let i = 0; i < arr.length; i++) {
// // console.log(arr[i]);
// if (arr[i] == 's') {
//     // console.log(arr[i]); 
//     box.push(arr[i])
// } else {
//     // console.log('error');
// }
// }
// let SSS = box.join('-')
// console.log(SSS);
// let miqdor = +prompt('Son kiriting')
// let box = [ ]
// let box2 = []
// let num = '!!!Hi!'
// function luboy() {
//     let num2 =num.split('')
//     for (let i = 1; i <= num2.length; i++) {
//         if (i > miqdor || i == 'Hi') {
//             box2.push(num2[i])
//         } else {
//             //console.log('');
//         }
//     }
//     // return console.log(box)
//     console.log(box2.join(''))
// }
// luboy()

let textUpperCase = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
console.log(textUpperCase);
let array = textUpperCase.split(' ')
console.log(array)
let upperCase = []
let lowerCase = []
let conCat = ''
let result = []

for (let i = 0; i < array.length; i++) {
  upperCase = array[i].at(0).toUpperCase()
	lowerCase = array[i].slice(1).toLowerCase()
  conCat = upperCase.concat(lowerCase)
  console.log(conCat);
  result.push(conCat)
}
console.log(result.join(' '));

let str = prompt('Unli harflari bor soz yozing')
let unli = ['u', 'a', 'e', 'o', 'i', "o'"]
let arr = str.split('')
//console.log(arr);
let son = []
let son2 = []
for (let i = 0; i < unli.length; i++) {
	for (let j = 0; j < arr.length; j++) {
		if (arr[j].toLowerCase() == unli[i]) {
      son ++ //arr[j]
      //console.log(arr[j]);
		}
	}
}
console.log(`Siz kiritgan so'z: (${str})`);
console.log(`Siz kiritgan so'z ichida: ${son} ta unli harif topdim`);
