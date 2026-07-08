const a=100
let b=200
var c=300

if(true){
    const a=10
    let b=20
    var c=30
    console.log("Inner",a)
    console.log("Inner",b)
    console.log("Inner",c)
}

console.log("Outer",a)
console.log("Outer",b)
console.log("Outer",c)

function one(){
    const username="Sayan Majumdar"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username="Sayan Majumdar"
    if(username==="Sayan Majumdar"){
        const website = "gooogle"
        console.log(username+" "+website)
    }
    //console.log(website)
}
//console.log(username)

function addOne(num){
    return num+1
}
console.log(addOne(5))

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))