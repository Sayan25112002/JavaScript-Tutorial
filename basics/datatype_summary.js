const id=Symbol("123")
const anotherId=Symbol("123")

const bigNumber = 12345678909876543210019390827384949209791002811398077150289615732984321087871326719821358791978018040832805087050732085851320517703570579547085075156546015010520063209n

const items = [10,20,"30",40,50]

let myObj = {
    name:"sayan",
    age:23
}

console.table([id,anotherId,id==anotherId,bigNumber, typeof(bigNumber)])

console.table([items])
console.table([myObj])

const myFunction = function(){
    console.log("Hello World - datatype_summary.js:19")
}

console.log(myFunction)
console.table(myFunction)