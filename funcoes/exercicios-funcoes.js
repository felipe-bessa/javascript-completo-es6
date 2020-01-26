//Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}

console.log(isTruthy());

//Crie uma função matemática que retorne o perímetro de um quadrado
//lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetroQuadrado(lado) {
  return 4 * lado;
}

console.log(calculaPerimetroQuadrado(10));

//Crie uma função que retorne o seu nome completo
//ela deve possuir os parâmetros: nome e sobrenome

function retornaNomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(retornaNomeCompleto('Ichigo', 'Kurosaki'));

//Crie uma função que verifica se um número é par
function verificaNumeroPar(numero) {
  if(numero % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(verificaNumeroPar(15));

//Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

console.log(tipoDeDado(10));

//addEventListener é uma função nativa do JavaScript
//O primeiro parâmetro é o evento que ocorre e o segundo o Callback
//utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log('Felipe Bessa');
});

//Corrija o erro abaixo

const totalPaises = 193; //Nova linha, movendo variavel para ter escopo global, pois ela é utilizada em ambas as funções. também foi passada para const uma vez que seu valor é uma constante

function precisoVisitar(paisesVisitados) {
  //Retirado variavel do escopo local para escopo global.
  //var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));