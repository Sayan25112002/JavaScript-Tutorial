const firstName='Sayan'
const lastName="Majumdar"

const age=23

console.log(`My name is ${firstName} ${lastName} and my age is ${age}`)

const name = new String('Sonu123')
const name1 = name

console.log(firstName+"-"+typeof(firstName))
console.log(lastName+"-"+typeof(lastName))
console.log(name)
console.table(name)
console.log(name+"-"+typeof(name))
console.log(name[0])
console.log(name.__proto__)
console.log(name1.toUpperCase())
console.log(name.toUpperCase())
console.log(name.charAt(1))
console.log(name.indexOf(12))

const newString = name.substring(0,5)
console.log(newString)

const sliceString = name.slice(-2)
console.log(sliceString)

const subString = name.substring(-2)
console.log(subString)

const reverseSubString = name.substring(5,2)
console.log(reverseSubString)

const reverseSliceString = name.slice(5,2)
console.log(reverseSliceString)

const word = "               Hello         World                   "
console.log(word)
console.log(word.trim())

const url = "http:808020localhost.com"
console.log(url.replace("201","//"))
console.log(url.includes("http"))
console.log(url.includes("https"))

const seperated = "Hello-World"
console.log(seperated.split("-"))