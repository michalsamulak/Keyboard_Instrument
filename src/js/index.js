import '../scss/main.scss';


const btnReplay = document.querySelector('.btn-replay');
const btnReset = document.querySelector('.btn-reset');
const keys = Array.from(document.querySelectorAll('.letter'));
let loop = [];

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
    loop.push(key.dataset.letter);
  
    keys.forEach(letter => letter.addEventListener('transitionend', removeEffect));

  }

  function loopPlaying(e) {
    const muzyka = document.querySelector(`audio[data-letter="${e}"]`);
    const klucz = document.querySelector(`div[data-letter="${e}"]`);
    klucz.classList.add('sound');
    muzyka.currentTime = 0;
    muzyka.play();


  }





  window.addEventListener('keydown', musicPlay);

  const loopPlay = () => {
    loop.forEach(el => loopPlaying(el));

  }



  btnReplay.addEventListener('click', loopPlay);
  btnReset.addEventListener('click', () => {
    loop = [];
  })
