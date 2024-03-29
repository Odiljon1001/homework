let str = 'salom bolajonlar salom nima gap salom yaxshimisan'
let arr = str.split('')
// console.log(arr);
let box = []
for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
if (arr[i] == 's') {
    // console.log(arr[i]); 
    box.push(arr[i])
} else {
    // console.log('error');
}
}
let SSS = box.join('-')
console.log(SSS);
let miqdor = +prompt('Son kiriting')
let box = [ ]
let box2 = []
let num = '!!!Hi!'
function luboy() {
    let num2 =num.split('')
    for (let i = 1; i <= num2.length; i++) {
        if (i > miqdor || i == 'Hi') {
            box2.push(num2[i])
        } else {
            //console.log('');
        }
    }
    // return console.log(box)
    console.log(box2.join(''))
}
luboy()
