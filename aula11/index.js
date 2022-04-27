//Strings sao indexadas, ou seja cada caracter teqm un indice, 0123456789
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4]);
console.log(umaString.slice(-5, umaString.length - 1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split('r'))
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())
console.log(umaString.indexOf('r'))
console.log(umaString.lastIndexOf('r'))