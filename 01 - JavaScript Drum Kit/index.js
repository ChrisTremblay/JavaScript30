const pressedKey = window.addEventListener("keydown", (e) => {
  let correspondingKey = document.querySelector(`div[data-key='${e.keyCode}']`);
  let correspondingSound = document.querySelector(`audio[data-key='${e.keyCode}']`);
  
  correspondingKey.classList.toggle("playing");
  correspondingKey.classList.toggle("sound");
  correspondingSound.play();
  setTimeout(function(){
    correspondingKey.classList.toggle("playing");
    correspondingKey.classList.toggle("sound");
  }, 500);
});