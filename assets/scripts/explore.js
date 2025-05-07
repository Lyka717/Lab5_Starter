// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceList = document.getElementById('voice-select');
  
  let voice = [];
  //voice = synth.getVoices();

  function populateVoice(){
    voice = synth.getVoices();
    for (let i = 0; i < voice.length; i++) {
      const voiceOption = document.createElement("option");
      voiceOption.textContent = `${voice[i].name} (${voice[i].lang})`;
    
    
      if (voice[i].default){
        voiceOption.textContent += " - DEFAULT"; 
      }

      voiceOption.setAttribute("data-lang", voice[i].lang);
      voiceOption.setAttribute("data-name", voice[i].name);
      voiceList.appendChild(voiceOption);
    }
  }
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoice;
  }

  const talkButton = document.querySelector("button");
  const icon = document.querySelector("img");
  const text = document.getElementById("text-to-speak");


  talkButton.addEventListener("click", (event) => {
    const STT = new SpeechSynthesisUtterance(text.value);
    const selectedVoice = voiceList.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voice.length; i++){
      if(voice[i].name === selectedVoice){
        STT.voice = voice[i];
      }
    }
    synth.speak(STT);
    text.blur();

    STT.onstart = () => {
      icon.src = "assets/images/smiling-open.png";
    }
    STT.onend = () => {
      icon.src = "assets/images/smiling.png";
    }
  });



}