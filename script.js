const sadSteps = [
  { text: "Are you sure? 😢", video: "sad.mp4" },
  { text: "Think once 💔", video: "sad1.mp4" },
  { text: "Don't break my heart 💘", video: "sad2.mp4" },
  { text: "Please 🥺", video: "sad3.mp4" }
];

const happyVideo = "happy2.mp4";
let noClickCount = 0;

function yesClick() {
  video.src = happyVideo;
  video.play();
  message.innerHTML = "Yayyy 💖 i knew it 😍 Luv Uh Banda Bangaram🤗!";
}

function noClick() {
  // Order lo video + message
  const step = sadSteps[noClickCount];

  video.src = step.video;
  video.play();
  message.innerHTML = step.text;

  noClickCount++;

  // Last ayyaka malli first nundi start (optional)
  if (noClickCount >= sadSteps.length) {
    noClickCount = 0;
  }
}
