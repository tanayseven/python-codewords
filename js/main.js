var videoSlide = document.getElementById("snake-slide");
var snakeVideo = document.getElementById("snake-video");
videoSlide.addEventListener("impress:stepenter", function () {
  snakeVideo.play();
}, false);
videoSlide.addEventListener("impress:stepleave", function () {
  snakeVideo.pause();
}, false);