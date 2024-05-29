const bumblebeeAudio = document.getElementById("bumblebee-audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const backwardButton = document.getElementById("back-button");
const skipButton = document.getElementById("skip-button");

//I want to play the audio when the user clicks on the play button
playButton.addEventListener("click", () => {
  bumblebeeAudio.play();
});

//I want to pause the audio when the user clicks on the pause button
pauseButton.addEventListener("click", () => {
  bumblebeeAudio.pause();
});

//I want to stop the audio when the user clicks on the stop button
stopButton.addEventListener("click", function () {
  //there is no stop method so I will pause the audio and reset the currentTime to 0
  bumblebeeAudio.pause();
  bumblebeeAudio.currentTime = 0;
});

backwardButton.addEventListener("click", () => {
  //set current time to be 10 seconds less
  bumblebeeAudio.currentTime -= 10;
});

skipButton.addEventListener("click", () => {
  //set current time to be 10 seconds more
  bumblebeeAudio.currentTime += 10;
});
