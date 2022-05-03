const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
//Para concatenar o array num1 + num2
/*const num3 = num1.concat(num2);
console.log(num3)*/
//Outro meio
const num3 = [...num1, ...num2];
console.log(num3);
