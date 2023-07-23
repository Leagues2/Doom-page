let audio;
let isPlaying = false;

function toggleSound() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

function init() {
  audio = new Audio('audio/Dogma.mp3');
  const button = document.querySelector('.sound-button');
  button.addEventListener('click', toggleSound);
}

document.addEventListener('DOMContentLoaded', init);
