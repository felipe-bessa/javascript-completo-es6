const btnCopy = document.querySelector('#copy');
const btnCut = document.querySelector('#cut');
const btnPaste = document.querySelector('#paste');
const inputText = document.querySelector('#clipboard');

btnCopy.addEventListener('click', function(){
  console.log('Copiei!');
  inputText.select();
  document.execCommand('copy');
});

btnCut.addEventListener('click', function(){
  console.log('Recortei!');
  inputText.select();
  document.execCommand('cut');
});

//Não funciona - javascript não consegue copiar valor da memória do SO
btnPaste.addEventListener('click', function(){
  console.log('Colei!');
  inputText.focus();
  document.execCommand('paste');
  console.log(inputText.textContent);
});