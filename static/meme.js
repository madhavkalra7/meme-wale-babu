// meme.js

const memeGeneratorBtn = document.getElementById("meme-generator");
const memeTitle = document.getElementById("meme-title");
const memeImg = document.getElementById("meme-img");
const memeAuthor = document.getElementById("meme-author");
const MEME_API_URL = "https://meme-api.com/gimme/wholesomememes";

const updateData = (title, imgURL, author) => {
  memeTitle.innerHTML = title;
  memeImg.setAttribute("src", imgURL);
  memeAuthor.innerHTML = `Author: ${author}`;
};

const generateMeme = () => {
  const mainDisplay = document.querySelector(".main");
  mainDisplay.classList.add("memeGenerated");

  fetch(MEME_API_URL).then((res) =>
    res.json().then((data) => {
      updateData(data.title, data.url, data.author);
    })
  );
};

memeGeneratorBtn.addEventListener("click", generateMeme);

let audio = null;
let pausedTime = 0;

const toggleAudioOnBackgroundClick = (event) => {
  if (event.target.tagName.toLowerCase() === "body") {
    if (!audio) {
      audio = new Audio("/static/arjunvelly.mp3");
      audio.play();
      document.getElementById("audio-indicator").innerText =
        "Click on image to Pause Audio";
    } else {
      if (audio.paused) {
        if (pausedTime !== 0) {
          audio.currentTime = pausedTime;
          audio.play();
          pausedTime = 0;
          document.getElementById("audio-indicator").innerText =
            "Click on image to Pause Audio";
        } else {
          audio.play();
          document.getElementById("audio-indicator").innerText =
            "Click on image to Pause Audio";
        }
      } else {
        pausedTime = audio.currentTime;
        audio.pause();
        document.getElementById("audio-indicator").innerText =
          "Click on image to Play Audio";
      }
    }
  }
};

document.body.addEventListener("click", toggleAudioOnBackgroundClick);

const imageUrls = [
  "monkey.jpg",
  "bhopinder.jpeg",
  "specialmonkey.jpeg",
  "gorilla.jpg",
  "mrbean.jpg",
  "bananacat.jpg",
  "thanos.jpg",
  "dogsurprise.jpg",
  "dog_aayien.jpg",
  "khali.jpg",
];

const loadRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const imgURL = imageUrls[randomIndex];

  window.location.href = imgURL;
};

document.querySelector(".balloon").addEventListener("click", function () {
  loadRandomImage();
});
