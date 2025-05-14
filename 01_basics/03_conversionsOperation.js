let score = "50"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let num = "21aa"
let value = Number(num);
console.log(typeof value);
console.log(value); //its not a number then also it type is number 
//NaN is a special type, Not A Number

let num1= null
let value1= Number(num1);
console.log(typeof value1);
console.log(value1);

let num2= undefined
let value2= Number(num2);
console.log(typeof value2);
console.log(value2);

// "50" => 50
// "21aa" => NaN
// true => 1; false => 0

let isLoggedIn = "ddn"

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

// isLoggedIn = 1 => true
// isLoggedIn = "" => false
// isLoggedIn = "ddn" => true

let someNumber = 20
let stringNumber =  String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


