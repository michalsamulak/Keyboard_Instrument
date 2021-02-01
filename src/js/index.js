import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

function removeEffect(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('sound');
  }

  function musicPlay(e) {
    const audio = document.querySelector(`audio[data-letter="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-letter="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('sound');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.letter'));
  keys.forEach(letter => letter.addEventListener('transitionend', removeEffect));
  window.addEventListener('keydown', musicPlay);