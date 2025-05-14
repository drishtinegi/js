const accountId = 32434
let accountEmail = "person@gmail.com"
var accountPassword = "2234"
accountCity = "bhopal"

// accountId = 23 // not allowed
aacontEmail = "p2@gammil.com"
accountPassword = "1111"
accountcity = "ny"// also a varaiable can be auto decalared like this but its preferd not to use
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountcity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


