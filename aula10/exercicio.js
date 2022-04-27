let varA = 'A'; 
let varB = 'B'; 
let varC = 'C'; 

console.log(varA, varB, varC);
// Tranformar A,B,C EM B,C,A


let tempA = 'A'
varA = varB; //B
varB = varC; //C
varC = tempA; //A

console.log(varA, varB, varC);

// Outra forma

varA = 'A'; 
varB = 'B'; 
varC = 'C';

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)