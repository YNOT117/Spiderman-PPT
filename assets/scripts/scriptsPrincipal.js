const inputs = document.querySelectorAll('input[name=tipoDeJuego]');

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', Modo);
}

function Modo(event) {
  let Modo = event.target.value;
  let url = 'views/' + Modo + '.html';
  window.location.assign(url);
}
