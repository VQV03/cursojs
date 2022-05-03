//Array sao valores por referencia.
//                0          1         2          3
const nomes = ['Vitor', 'Ricardo', 'Eduardo', 'Roberto']; //Array literal
nomes[2] = 'Joao';
delete nomes[2]; //Remove o elemento com o indice 2 sem mexer no indice dos demais.
console.log(nomes);
const novo = [...nomes];
novo.pop();
console.log(nomes);
const removido = nomes.pop();
const removido2 = nomes.shift();
console.log(nomes, removido);
//Diferenca entre pop e shift, o pop remove o objeto sem alterar o indice dos demais, o shift remove o objeto alterando o indice dos demais.
nomes.push('Gerso'); //Push eu adiciono um elemento ao final do array.
nomes.unshift('Arantes'); //Unshift eu adiciono um elemento no indice 0 do array, empurrando os demais.
//Mais utilizados pop e push.
const slices = nomes.slice(0. -1); //Slice remove elementos de um array, ali por exemplo ela esta removendo o ultimo elemento
console.log(slices); //['Vitor', 'Ricardo', 'Eduardo']
const completo = 'Vitor, Queiroz, Vicente,';
const split = completo.split(','); //Split divide meu elementos, em elementos menos dentro de um array baseado no criterio colocado entre parenteses
console.log(split); //['Vitor', 'Queiroz', 'Vicente']
const completoArray = ['Vitor', 'Queiroz', 'Vicente'];
const completoString = completoArray.join(' '); //Join une elementos que estao em um array transformado-os em uma string, que tera como separador o elemento que eu colocar dentro dos parenteses.
console.log(completoString) //Vitor Queiroz Vicente

//Outra forma de escrever um array:
//Funciona para strings, objetos, funcoes e numeros.

/*const nome = new Array('Vitor', 'Ricardo', 'Eduardo', 'Roberto')
nomes[2] = 'Joao';
delete nomes[2]; 
console.log(nomes);*/