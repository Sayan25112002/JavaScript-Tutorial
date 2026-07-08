if(function(){}){
    console.log("Executed")
}
else{
    console.log("Not Executed")
}

const score=100
if(score>200){
    let result="Good Score"
    console.log(`${result}`)
}
//console.log(`${result}`)

const balance=1000
if(balance<500){
    console.log(`${balance} less than 500`)
}
else if(balance<1000){
    console.log(`${balance} less than 1000`)
}
else if(balance==1000){
    console.log(`Perfect Balance ${balance} equals to 1000`)
}
else if(balance>1000){
    console.log(`${balance} greater than 1000`)
}
else{
    console.log(`Invalid Input`)
}

const userLoggedIn=true
const hasDebitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn&&hasDebitCard&&(loggedInFromEmail||loggedInFromGoogle)){
    console.log("Allowed to buy Course")
}else{
    console.log("Not Allowed to buy Course")
}

const month=3
switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    default:
        console.log("1st half of month completed")
        break;
}
    
/*
falsy-
0
-0
0n
""
null
undefined
NaN
*/

const userEmail=[]
//if(userEmail){
//    console.log("User Email Exists")
if(userEmail.length===0){
    console.log("No Email Address")
}else{
    console.log("User Email Exists")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty")
}

let val1,val2,val3

val1=5??10
console.log(val1)

val2=null??10
console.log(val2)

val3=null??10
console.log(val3)

const price=50
price>=50?console.log("Greater than 50"):console.log("Less than 50")