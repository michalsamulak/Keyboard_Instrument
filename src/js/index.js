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
    const audioRep = document.querySelector(`audio[data-letter="${e}"]`);
    const keyRep = document.querySelector(`div[data-letter="${e}"]`);
    keyRep.classList.add('sound');
    audioRep.currentTime = 0;
    audioRep.play();
    

  }

  window.addEventListener('keydown', musicPlay);


  const loopPlay = () => {
    loop.forEach(function(el, index) {
      setTimeout(function(){
        loopPlaying(el)
      }, 500 * (index + 1));
  });
   
  }

  btnReplay.addEventListener('click', loopPlay);
  btnReset.addEventListener('click', () => {
    loop = [];
  })
