const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sayan", email:"sayan@gmail.com"})
    },3000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Sayan Majumdar",password:"123"})
        }else{
            reject("Something went wrong")
        }
    },4000)
})

const username=promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("The promise is either rejected or resolved"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Sayan Majumdar",password:"123"})
        }else{
            reject("Something went wrong")
        }
    },4000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log('E:'+error)
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))
