const user = {
    username:"Sayan Majumdar",
    loginCount:10,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got User Details")
    }
}

console.log(user.username)
console.log(user.getUserDetails())