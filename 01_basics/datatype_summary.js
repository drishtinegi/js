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