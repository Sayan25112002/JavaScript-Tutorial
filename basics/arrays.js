const myArr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
console.log(myArr)
console.log(myArr[1])

const arr = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F')
console.log(arr)

arr.push(10)
arr.push([10,"Array"])
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(9)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(90))
console.log(arr.includes("A"))
console.log(arr.indexOf(90))
console.log(arr.indexOf("C"))

arr.push([10,"Array"])
const newArr = arr.join()
console.log(arr)
console.log(newArr)
console.log(typeof arr)
console.log(typeof newArr)

console.log("A ",myArr);

const myn1 = myArr.slice(1,10)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,10)
console.log(myn2)
console.log(myn1)
console.log("C ",myArr)


const array1=[0,1,2,3,4,5,6,7,8,9]
const array2=['A','B','C','D','E','F']

array1.push(array2)
console.log(array1)
console.log(array1[10,5])
console.log(array1[5,10])
console.log(array1[10][2])

array1.pop()
const allArray = array1.concat(array2)
console.log(allArray)
const allNewArray = [...array1,...array2]
console.log(allNewArray)

const another_array=[0,1,2,3,4,5,[6,7,8,9],'A','B',['C','D',['E','F']]]
const real_another_array=another_array.flat(Infinity)
console.log(another_array)
console.log(real_another_array)

console.log(Array.isArray("Sayan Majumdar"))
console.log(Array.from("Sayan Majumdar"))
console.log(Array.from({name:"Sayan Majumdar"}))

const number1=100
const number2=200
const number3=300
console.log(Array.of(number1,number2,number3))