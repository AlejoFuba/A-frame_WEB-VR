// variable para el boton de play
const botonPlay = document.querySelector('#audio-play');

// funcion para reproducir al ingresar el cursor
botonPlay.addEventListener('mouseenter', () => {
    botonPlay.components.sound.playSound();
});