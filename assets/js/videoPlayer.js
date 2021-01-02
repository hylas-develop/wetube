const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayBtn");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");

function exitFullScreen() {
  fullScrnBtn.innerHTML = `<i class="fas fa-expand"></i>`;
  fullScrnBtn.removeEventListener("click", exitFullScreen);
  fullScrnBtn.addEventListener("click", goFullScreen);
  //for Chrome
  // Exit full screen function in document object
  document.webkitExitFullscreen();
}

function goFullScreen() {
  //for Chrome
  videoContainer.webkitRequestFullscreen();
  fullScrnBtn.innerHTML = `<i class="fas fa-compress"></i>`;
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrnBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
  init();
}
