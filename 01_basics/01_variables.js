const accountId = 12345
let accountName = "divya@google.com"
var accountPasssword = "1567"
accountCity = "jaipur"

// accountId = 23 // not allowed

accountName = "divyaa@google.com"
accountPasssword = "546"
accountCity = "delhi"
let accountState;

console.log(accountId);

/*
prefer not to use var because o issue in block scope and functional scope
*/
console.table([accountId,accountName,accountPasssword,accountCity,accountState])


