const score=100
console.log(score)

const number=new Number(600)
console.log(number);
console.log(number.toString().length)
console.log(number.toFixed(3))// give a floating number o/p--->600.000
const otherNumber= 123.49
console.log(otherNumber.toPrecision(4))//o/p-->123.5 

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))

// ----------------------Maths--------------

console.group(Math);//object 
console.group(Math.abs(-4))
console.log(Math.round(9.9))//10
console.log(Math.ceil(9.4))//10
console.log(Math.floor(9.9))//9
console.log(Math.min(6,9))//6
console.log(Math.max(7,3,9,10))//10 

console.log(Math.random())//value from 0 to 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
