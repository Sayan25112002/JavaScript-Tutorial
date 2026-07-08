const user = {
    username:"Sayan Majumdar",
    price:1000,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to Website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="Sonu"
user.welcomeMessage()

console.log(this)

function abc(){
    console.log(this)
}
abc()

const abcd = function abcd(){
    let username="SayanMajumdar"
    console.log(this.username)
}
abcd()

const add=(num1,num2)=>{
    return num1+num2
}
console.log(add(10,20))

const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(10,20))

const obj = () => ({username:"Sonu"})
console.log(obj())