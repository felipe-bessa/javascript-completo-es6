//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

//Resposta -> 35
console.log(total);

//Crie duas expressões que retornen NaN
// 1
var peso = '90kg';
var altura = 1.71;
var imc = peso/(altura**2);

console.log(imc);

// 2
var distancia = '100';
var tempo = '2h';
var velocidadeMedia = distancia/tempo;

console.log(velocidadeMedia);

//Somar a string '200' com o número 50 e retornar 250;
var soma = +'200' + 50;

console.log(soma);

//Incremente o número 5 e retorne seu valor incrementado
var x = 5;
console.log(++x);

//Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = numero / 2 + unidade;

console.log(peso);
console.log(pesoPorDois);