function sayMyName(){
    let firstName="Sayan"
    let middleName=" "
    let lastName="Majumdar"
    console.log(firstName+middleName+lastName)
}
sayMyName()

function add(number1,number2){
    console.log(number1+number2)
}
add()

function addTwoNumbers(number1,number2){
    console.log(number1+number2)
    return "Sum Done"
}

function addTwoNumbersNU(number1,number2){
    console.log(number1+number2)
}
addTwoNumbersNU(100,null)

function addTwoNumbers1(number1,number2){
    console.log(number1+number2)
    return number1+number2
}
addTwoNumbers(100,undefined)

const sum=addTwoNumbers(100,200)
console.log("Sum=",sum)

function addNumbers(number1,number2){
    return number1+number2
}
const result=addNumbers(50,100)
console.log("Result=",result)

function loggedIn(userName){
    if(!userName){
        return "Please Enter User Name"
    }
    return `${userName} logged In`
}
console.log(loggedIn(""))

//ARRAYS AND OBJECT USING FUNCTION//
function calculateShopKart(num1){
    return num1
}
console.log(calculateShopKart(100,200))

function calculateShopKart(val1,val2,...num1){
    return num1
}
console.log(calculateShopKart(100,200,300))

const user={
    username:"Sayan Majumdar",
    price:200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username:"Sonu",
    price:500
})

const allNewArray=[100,200,300,400,500,600,700,800,900]
function returnSecondArray(getArray){
    return getArray[1]
}
console.log(returnSecondArray(allNewArray))
console.log(returnSecondArray([100,300,500,700,900]))