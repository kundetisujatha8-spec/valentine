document.addEventListener("DOMContentLoaded", function(){
    
    const video = document.getElementById("videoPlayer");
    const message = document.getElementById("message");
    const sadSteps = [
  { text: "Are you sure? 😢", video: "sad.mp4" },
  { text: "Think once 💔", video: "sad1.mp4" },
  { text: "Don't break my heart 💘", video: "sad2.mp4" },
  { text: "Please 🥺", video: "sad3.mp4" }
];

const happyVideo = "happy2.mp4";
let noClickCount = 0;

window.yesClick = function() {
  video.src = happyVideo;
  video.load();
  video.play();
  message.innerHTML = "Yayyy 💖 i knew it 😍 Luv Uh Banda Bangaram🤗!";
};

window.noClick = function() {
  // Order lo video + message
  const step = sadSteps[noClickCount];

  video.src = step.video;
  video.load();
  video.play();
  message.innerHTML = step.text;

  noClickCount++;

  // Last ayyaka malli first nundi start (optional)
  if (noClickCount >= sadSteps.length) {
    noClickCount = 0;
  }
};
});
