//Função que checa se uma entrada de dados é uma String
//Utilizada no Exercício 01
function isString(input) {
  return (typeof input === 'string') ? true : false;
}

//Função que checa se uma entrada de dados está vazia
//Utilizada no Exercicio 02
isBlank = function(input) {
  
  //Operador ternário -> condição ? resultado_para_verdadeiro : resultado_para_falso
  //Neste caso testamos se a variavel é 'truthy' if(input) retrona falso para null, undefined, Nan, "", 0 ou falso
  return input ? false : true;
}

//Exercicio 01
console.log('Exercicio 01');
console.log(isString('Felipe'));
console.log(isString([1,2,4,0]));
console.log('Fim Exercicio 01');

//Exercicio 02
console.log('Exercicio 02');
console.log(isBlank(''));
console.log(isBlank('Alice'));
console.log('Fim Exercicio 02');