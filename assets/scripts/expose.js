// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectedHorn = document.querySelector('#horn-select');
  const displayedImg = document.querySelector("img");
  const displayedAudio = document.querySelector("audio");

  selectedHorn.addEventListener("change", (event) => {
    displayedImg.src = `assets/images/${event.target.value}.svg`;
    displayedAudio.src = `assets/audio/${event.target.value}.mp3`;
    
  }); 

  const volValue = document.getElementById("volume");
  const volImg = document.querySelector("#volume-controls > img")
  volValue.addEventListener("input", (event) => {
    if(event.target.value == 0) {
      volImg.src = `assets/icons/volume-level-0.svg`;
    }
    else if(event.target.value >= 1 && event.target.value < 33) {
      volImg.src = `assets/icons/volume-level-1.svg`;
    }
    else if(event.target.value >= 33 && event.target.value < 67){
      volImg.src = `assets/icons/volume-level-2.svg`;
    }
    else{
      volImg.src = `assets/icons/volume-level-3.svg`;
    }
    displayedAudio.volume = event.target.value / 100;
  });

  const playSound = document.querySelector("button");
  const jscConfetti = new JSConfetti();
  playSound.addEventListener("click", (event) => {
    displayedAudio.play();
    if(selectedHorn.value == "party-horn"){
      jscConfetti.addConfetti();
    }
  });
}