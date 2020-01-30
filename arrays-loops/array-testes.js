let familia = ['Alice', 'Marci', 'Ilma', 'Gervásio', 'Felipe', 'Emanuel', 'Sara'];

//imprime array
console.log(familia);

//imprime tamanho do array
console.log(familia.length);

//imprime primeiro item do array
console.log(familia[0]);

//imprime ultimo item do array
console.log(familia[familia.length - 1]);

//iterando o array
familia.forEach(function(item) {
  console.log(item);
});

//iterando o array e retornando a cada iteração o par chave valor
familia.forEach(function(item, index) {
  console.log(`Index: ${index} - Valor: ${item}`);
});

//a função que é usada como parametro do forEach retorna nessa ordem os parametros valor da chave, id da chave e array inteiro, caso necessário, basta você informar nos parametros.

//veja abaixo
familia.forEach(function(pessoa, id, pessoas) {
  console.log(`${pessoa} - ${id} - ${pessoas}`);
});

//iterando array e mostrando apenas os valores pares
familia.forEach(function(pessoa, index) {
  if(index % 2 === 0) console.log(pessoa);
});

//Adicionar um item ao final do array
familia.push('Tais');
console.log(familia);

//Remover um item do final do array
var ultimo = familia.pop();
console.log(ultimo);
console.log(familia);

//Remover um item no inicio do array
var primeiro = familia.shift();
console.log(primeiro);
console.log(familia);

//Adicionar um item no inicio do array
familia.unshift('Alice');
console.log(familia);

//Procurar o indice de um item no array
var pos = familia.indexOf('Marci');
console.log(pos);

//Coloca o array ao avesso
familia.reverse();
console.log(familia);

//Coloca em Ordem Alfabética
familia.sort();
console.log(familia);

//Ordena pelo tamanho dos nomes
familia.sort(function(a, b) {
  if(a.length < b.length) {
    return -1;
  }
  if(a.length > b.length) {
    return 1;
  }
  //a com mesmo tamanho de b
  return 0;
})
console.log(familia);

//Concatenação de Arrays
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);
//A ordem interfere na criação do array
alphaNumeric = numeric.concat(alpha);
console.log(alphaNumeric);