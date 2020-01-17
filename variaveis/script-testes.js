/*
  Devido ao Hoisting todas as variaveis declaradas com 'var' são içadas ao inicio do script, sendo enchergadas ao longo do código mas ela efetivamente recebe o valor no momento da atribuição. Se a variavel 'var' for utilizada antes de sua declaração retorna UNDEFINED.
*/
console.log(nome); // Retornna UNDEFINED (Hoisting)
var nome = 'Felipe'; //Atribui valor
console.log(nome); //Retorna o valor atribuido a variavel

/*
  O Hoisting não funciona para variaveis tipo let ou const. logo, se tentar utilizar uma variavel tipo let antes de sua declaração será retornado um erro.
*/

console.log(carro); //Uncaught ReferenceError: Cannot access 'carro' before initialization
let carro = 'Charger';
console.log(carro);

console.log(filha); //Uncaught ReferenceError: Cannot access 'filha' before initialization
const filha = 'Alice';
console.log(filha);

filha = 'Bessa'; //Uncaught TypeError: Assignment to constant variable.