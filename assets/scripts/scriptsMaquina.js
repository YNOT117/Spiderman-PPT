const inputs = document.querySelectorAll('input[name=heroe]');

const jugador1 = document.querySelector('.jugador1');

const section = document.querySelector('.main');
const results = document.querySelector('.results');

const sectionB = document.querySelector('.sectionBody');

const resultText = document.querySelector('.resultsText');

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', heroSelect);
}

function heroSelect(event) {
  let j1hero = event.target.value;
  jugador1.classList.add('hidden');
  villanSelect(j1hero);
}

function villanSelect(j1hero){

  let Aleatoreo = Math.round(Math.random()*2);
  let Maquina;

    if (Aleatoreo == 0) {
       Maquina = "piedra";
    }
    if (Aleatoreo == 1) {
       Maquina = "papel";
    }
    if (Aleatoreo == 2) {
       Maquina = "tijera";
    }

    let j2villan = Maquina;

  section.classList.add('hidden');

  match(j1hero, j2villan);
  }

  function match(j1hero, j2villan){

      let Jugador1 = j1hero;
      let Jugador2 = j2villan;


      let villano;
      if (Jugador2 == "papel") {
        villano = "Venom";
      }else if(Jugador2 == "piedra"){
        villano = "Doctor Octopus";
      }else {
        villano = "Duende verde";
      }

      results.classList.remove('hidden');


      if (Jugador1 == Jugador2) {
        //Empate
        sectionB.style.backgroundImage = 'url("../assets/img/SvsS.jpg")'; // La ruta se pone como si estuvieramos en el CSS
        resultText.innerHTML = "Es un empate, ambos eligieron " + Jugador1;
      }
      if (Jugador1 == "papel" && Jugador2 == "piedra") {
        //Jugador 1
        sectionB.style.backgroundImage = 'url("../assets/img/spidermanW.jpg")';
        resultText.innerHTML = "Spider-man con ayuda de un papel, logro derrotar a " + villano + " que tenia una piedra";
      }
      if (Jugador1 == "papel" && Jugador2 == "tijera") {
        //Jugador 2
        sectionB.style.backgroundImage = 'url("../assets/img/spidermanF.jpg")';
        resultText.innerHTML = "Raios el " + villano + " tiene unas tijeras y Spider-Man solo tiene un papel para protegerse"
      }
      if (Jugador1 == "piedra" && Jugador2 == "papel") {
        //Jugador 2
        sectionB.style.backgroundImage = 'url("../assets/img/spidermanF.jpg")';
        resultText.innerHTML = "Spider-Man penso que una piedra lo protegeria del papel que tiene " + villano;
      }
      if (Jugador1 == "piedra" && Jugador2 == "tijera") {
        //Jugador 1
        sectionB.style.backgroundImage = 'url("../assets/img/spidermanW.jpg")';
        resultText.innerHTML = "Eso es Spider-man rompre la tijera que tomo el " + villano + " con la piedra que tienes para que no te hagan daño"
      }
      if (Jugador1 == "tijera" && Jugador2 == "papel") {
        //Jugador 1
        sectionB.style.backgroundImage = 'url("../assets/img/spidermanW.jpg")';
        resultText.innerHTML = "ja " + villano + " pensó que esconderse detrás de un papel no lo verías, rómpelo con la tijera que tienes Spider-Man"
      }
      if (Jugador1 == "tijera" && Jugador2 == "piedra") {
        //Jugador 2
        sectionB.style.backgroundImage = 'url("../assets/img/spidermanF.jpg")';
        resultText.innerHTML = villano + " derrota a Spiderman con una piedra :(";
      }

    }
