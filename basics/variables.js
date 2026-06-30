const accountId = 14453
let accountEmail = "sayanmajumdar1920014@gmail.com"
var accountPassword = "Sayan@2002"
accountCity = "Kolkata"
let accountState

accountEmail = "abc@gmail.com"
accountPassword = "123@ABC"
accountCity = "Durgapur"

//accountId=2, constant not reassigned
console.log(accountId)

/*
 Prefer not to use var
 because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])