const id = Symbol("id")
const mySym=Symbol()
const name="age"

const userDetail = {
    [id]:1,
    name:"Sayan Majumdar",
    "fullName":"Sayan Majumdar",
    "middle name":'NA',
    age:23,
    [mySym]:Symbol("MyKey1"),
    location:"Kolkata",
    email:"sayanmajumdar1920014@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Friday","Saturday"]
}

console.log(userDetail)
console.log(userDetail[id])
console.log("fdghj",userDetail[name])
console.log(userDetail.name)
console.log(userDetail["name"])
console.log(userDetail.fullName)
console.log(userDetail["fullName"])
console.log(userDetail["middle name"])
console.log(userDetail[mySym])
console.log(typeof userDetail[mySym])

userDetail.email="sonu@123"
console.log(userDetail.email)

userDetail.greeting = function(){
    console.log("Welcome User")
}

userDetail.greeting1 = function(){
    console.log(`Welcome ${this.name}`)
}
userDetail.greeting()
userDetail.greeting1()
Object.freeze(userDetail)

userDetail.name="sayan@2002"
console.log(userDetail)

// Singleton Object //
const singleUserDetail = {}

singleUserDetail.id=123
singleUserDetail.name="Sayan Majumdar"
singleUserDetail.isLoggedIn=false
singleUserDetail.lastLoggedIn=["Friday","Saturday"]

console.log(singleUserDetail)

const regularUser = {
    email:"sayan@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Sayan",
            middleName:"",
            lastName:"Majumdar"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullName.userFullName)
console.log(regularUser.fullName.userFullName.middleName)

const obj1={
    1:"A",
    2:"B",
    3:"C"
}

const obj2={
    4:"D",
    5:"E",
    6:"F"
}
const obj3 = {obj1,obj2}
console.log(obj3)

const obj4 = Object.assign(obj1,obj2)
console.log(obj4)

const obj5 = {...obj1,...obj2}
console.log(obj5)

const users=[
    {
        "id":1,
        "email":"email1@gmail.com"
    },
    {
        "id":2,
        "email":"email2@gmail.com"
    },
    {
        "id":3,
        "email":"email3@gmail.com"
    }
]

console.log(users);

console.log(Object.keys(singleUserDetail))
console.log(Object.values(singleUserDetail))
console.log(Object.entries(singleUserDetail))

console.log(singleUserDetail.hasOwnProperty('isLoggedIn'))