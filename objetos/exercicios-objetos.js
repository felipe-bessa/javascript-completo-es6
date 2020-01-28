//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Felipe',
  sobrenome: 'Bessa'
}

//Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.showNome = function () {
  console.log(`${this.nome}  ${this.sobrenome}`);
}

//Modifique o valor da propriedade preço para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}

console.log(carro);

carro.preco = 3000;

console.log(carro);

//Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver um homem

var cachorro = {
  nome: 'Billy',
  raca: 'Labrador',
  idade: 10,
  cor: 'preto',
  latir(pessoa) {
    (pessoa === 'homem') ? console.log('Au au au!') : console.log('Nada');
  }
}