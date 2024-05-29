//creating event
console.log("Hello World");
const ourAudio = document.getElementById("our-audio");
const playBtn = document.getElementById("play-button");
const pauseBtn = document.getElementById("pause-button");
const stopBtn = document.getElementById("stop-button");
const skipBack = document.getElementById("back-button");
const skipFor = document.getElementById("skip-button");

//adding reusable funcions

function playAction(sampleAudio) {
  sampleAudio.play();
}

function pauseAction(sampleAudio) {
  sampleAudio.pause();
}

function stopAction(sampleAudio) {
  sampleAudio.pause();
  ourAudio.currentTime = 0;
}

function skipBackAction(sampleAudio) {
  sampleAudio.pause();
  ourAudio.currentTime -= 5;
}

function skipForAction(sampleAudio) {
  sampleAudio.pause();
  ourAudio.currentTime += 5;
}

//event listener

playBtn.addEventListener("click", () => playAction(ourAudio));

pauseBtn.addEventListener("click", () => pauseAction(ourAudio));

stopBtn.addEventListener("click", () => stopAction(ourAudio));

skipBack.addEventListener("click", () => skipBackAction(ourAudio));

skipFor.addEventListener("click", () => skipForAction(ourAudio));
