"use strict";

let number="50ABC"
let number1=null
let number2
let number3=true
let number4=false

console.log(number)
console.log(typeof(number))
let value=Number(number)
console.log(typeof value)
console.log(value)

console.log(number1)
console.log(typeof(number1))
let value1=Number(number1)
console.log(typeof value1)
console.log(value1)

console.log(number2)
console.log(typeof(number2))
let value2=Number(number2)
console.log(typeof value2)
console.log(value2)

console.log(number3)
console.log(typeof(number3))
let value3=Number(number3)
console.log(typeof value3)
console.log(value3)

console.log(number4)
console.log(typeof(number4))
let value4=Number(number4)
console.log(typeof value4)
console.log(value4)

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1=0
let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2="Sayan"
let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

let isLoggedIn3=null
let booleanIsLoggedIn3=Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3)

let isLoggedIn4
let booleanIsLoggedIn4=Boolean(isLoggedIn4)
console.log(booleanIsLoggedIn4)

let isLoggedIn5=" "
let booleanIsLoggedIn5=Boolean(isLoggedIn5)
console.log(booleanIsLoggedIn5)

let numberNull=null
let nullToString = String(numberNull)
console.log(nullToString)

let numberUndefined
let undefinedToString = String(numberUndefined)
console.log(undefinedToString)

/*50=>50
  50ABC=>NaN
  null=>0
  undefined=>NaN
  true=>1
  false=>0
*/

/*1=>true
  0=>false
  null=>false
  ""=>false
  " "=>true
*/