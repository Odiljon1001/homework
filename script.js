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
