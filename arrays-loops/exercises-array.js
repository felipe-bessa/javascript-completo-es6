//Crie um array com os anos que o Brasil ganhou a copa do mundo
//1958, 1962, 1970, 1994, 2002
var anoBrasilCampeaoCopaDoMundo = [1958, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop para mostrar no console a seguinte mensagem
//`O Brasil ganhou a copa de ${ano}`
anoBrasilCampeaoCopaDoMundo.forEach(function(ano){
  console.log(`O Brasil ganhou a copa de ${ano}`);
});

//Interaja com um loop nas frutas abaixo e para ao chegar em Pêssego
var frutas = ['Kiwi', 'Manga', 'Pitaia', 'Pêssego', 'Laranja'];

for(let i = 0; i <= frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pêssego') {
    break;
  }
}

//FOREACH Não funciona com break
frutas.forEach(function(fruta){
  console.log(fruta);
  if(fruta === 'Pêssego') {
    //break;
  }
});

//Coloque a ùltima fruta do array acima em uma variável, sem remover a mesma do array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);