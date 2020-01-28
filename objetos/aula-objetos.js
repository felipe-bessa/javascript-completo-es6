var pessoa = {
  nome: 'Felipe',
  idade: 30,
  profissao: 'Desenvolvedor de Sistemas',
  possuiFaculdade: true
}

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado ** 2;
  },
  perimetro: function(lado) {
    return this.lados * lado; 
  }
}

//Nas atualizações de ES6 e posteriores, em criação de objetos é possivel abreviar a assinatura do método

//Math é um objeto nativo de javascript
var circulo = {
  area(raio) {
    return Math.PI * raio ** 2;
  },
  circunferencia(raio) {
    return 2 * Math.PI * raio;
  }
}