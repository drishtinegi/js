// how stored and howit is accessed

//  Primitive- call by value, not original data , we are given copied value and that copied value is only changed
// 7 ypes: String, Number, Boolean, null, undefined, Symbol //unique, BigInt

const score = 100
const scoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('1234')
const anotherId= Symbol('1234')
// Even tho their values are same i.e. '1234', using Symbol they are consider different
console.log(id === anotherId);

const bigNumber =  23456789345678934567845n


//Reference type/ Non Primitive type- thoes values whose reference are given
//Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj= {
    name: "drishti",
    age: 20,
} //object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);

/* 1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


//**********************************************************************

//Stack (Primitive) //copied value , Heap (Non Primitive)// reference 


//stack
let myYoutubeName = "hahaFunItIs"
let anothername= myYoutubeName
anothername = "itsnwechannel"
console.log(myYoutubeName)
console.log(anothername) //because above the copied is given so it is changed


//heap
let user1 = {
    email: "user@google.com",
    upi: "user@ybl",
}
// here in user2 it is given the same reference as user1, not the copy
let user2 = user1;

user2.email = "drishti@google.com";

console.log(user1.email);
console.log(user2.email); // so both values are changed


