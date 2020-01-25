//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coloque no console 'É maior', 'É igual', ou 'É menor'.

// Resposta 1
var minhaIdade = 30;
var idadeParente = 25;

if(minhaIdade > idadeParente) {
  console.log('É maior');
} else if(minhaIdade === idadeParente) {
  console.log('É igual');
} else if(minhaIdade < idadeParente) {
  console.log('É menor');
}

 //Qual resultado é retornado na seguinte expressão?
 var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

 // Resposta 2 -> O Número 3
 // 5 - 2 = 3;
 // 5 - ' ' = 5;
 // 5 - 2 = 3;
 // 3 && 5 && 3;
 //O operador && retorna o primeiro falso encontrado na expressão, caso não encontre valores falsos, retorna o último valor truthy
 console.log(expressao);

 //Verifique se as seguintes expressões são Truthy ou Falsy

 // Resposta 3
 var nome = 'Felipe'; //Truthy
 console.log(!!nome);
 var idade = 28; //Truthy
 console.log(!!idade);
 var possuiDoutorado = false; //Falsy
 console.log(!!possuiDoutorado);
 var empregoFuturo; //Falsy
 console.log(!!empregoFuturo);
 var dinheiroNaConta = 0; //Falsy
 console.log(!!dinheiroNaConta);

 //Compare o total de habitantes do Brasil com a China (valores em milhões)
 var brasil = 207;
 var china = 1340;

 // Resposta 4
 if(brasil >  china) {
   console.log('Existem mais brasileiros do que chineses no mundo.');
 } else if(brasil === china) {
   console.log('A população mundial de chineses e brasileiros são do mesmo tamanho.');
 } else if(brasil < china) {
  console.log('Existem mais chineses do que brasileiros no mundo.');
 }

 //O que irá aparecer no console?
 if(('Gato' === 'gato') && (5 > 2)){
   console.log('Verdadeiro');
 } else {
   console.log('Falso');
 }

 // Resposta 5
 //FALSO, 'Gato' é diferente de 'gato' retornando falso para o teste de igualdade; logo em seguida o falso é utilizado em operação && que retorno o primeiro falso encontrado em seus operadores. Evaluando a expressão do IF para falso e entrando no laço ELSE e imprimindo Falso no console