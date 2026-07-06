const number1=100.005
console.log(number1+"-"+typeof(number1))

const number2=new Number(200.0021)
console.log(number2)
console.log(number2+"-"+typeof(number2))

console.log(typeof(number1.toString()))
console.log(number1.toFixed(12))
console.log(number2.toString().length)
console.log(number1.toPrecision(12))
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

const number3=100000
console.log(number3.toLocaleString())
console.log(number3.toLocaleString('en-IN'))

console.log(typeof(Number))


console.log(Math)
console.log(Math.abs(-5.71))
console.log(Math.round(-5.73))
console.log(Math.ceil(-5.71))
console.log(Math.floor(-5.71))
console.log(Math.max(3,4,5,6,7.9,8))
console.log(Math.min(3,4,5,6,7.9,8))
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1))+min)