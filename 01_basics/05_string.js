const name = "drishti"
const repoCount = "1"

console.log(name + repoCount + "Value"); //not good syntax

//backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//how string is declared (above are also the method)

const gameName = new String('drishti-negi-com')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-8, 4) //in slice we can use -ve values
console.log(anotherString)

const newString1 = "  drishti  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://drishti.com/drishti%20negi"
console.log(url.replace('%20', '-'));

console.log(url.includes('drishti'));

console.log(gameName.split('-'))
