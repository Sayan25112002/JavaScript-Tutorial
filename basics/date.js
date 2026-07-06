let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

let createdDate = new Date(2025,1,2)
console.log(createdDate)
console.log(createdDate.toString())
console.log(createdDate.toLocaleDateString())

let newCreatedDate = new Date(2028-5-5)
console.log(newCreatedDate)
console.log(newCreatedDate.toISOString())
console.log(createdDate.toString())
console.log(createdDate.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createdDate.getTime())
console.log(Date.now())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate())

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))