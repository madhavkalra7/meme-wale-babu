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

document.addEventListener("DOMContentLoaded", function () {
  // Declare global variables
  var audio = new Audio("/static/media/arjunvelly.mp3");
  var pausedTime = 0;

  // Add event listener to the image element
  document.getElementById("foo").addEventListener("click", function (event) {
    // Check if the clicked element is an image
    if (event.target.tagName.toLowerCase() === "img") {
      // Check if the audio is playing or not
      if (!audio.paused) {
        // Pause the audio and save the current time
        pausedTime = audio.currentTime;
        audio.pause();
        document.getElementById("audio-indicator").innerText =
          "Click on image to Play Audio";
      } else {
        // Resume the audio from the saved time
        audio.currentTime = pausedTime;
        audio.play();
        document.getElementById("audio-indicator").innerText =
          "Click on image to Pause Audio";
      }
    }
  });
});

document.body.addEventListener("click", toggleAudioOnBackgroundClick);

function setupSurpriseButton() {
  const imageUrls = [
    "/static/images/surprise/monkey.jpg",
    "/static/images/surprise/bhopinder.jpeg",
    "/static/images/surprise/specialmonkey.jpeg",
    "/static/images/surprise/gorilla.jpg",
    "/static/images/surprise/mrbean.jpg",
    "/static/images/surprise/bananacat.jpg",
    "/static/images/surprise/thanos.jpg",
    "/static/images/surprise/dogsurprise.jpg",
    "/static/images/surprise/dog_aayien.jpg",
    "/static/images/surprise/khali.jpg",
  ];

  const loadRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imgURL = imageUrls[randomIndex];

    window.location.href = imgURL;
  };

  document.querySelector(".balloon").addEventListener("click", function () {
    loadRandomImage();
  });
}

// Call the function to set up the event listener
setupSurpriseButton();

// Add event listener for "Games" link in the navbar
document.getElementById("games-link").addEventListener("click", function () {
  window.location.href = "/templates/games/games.html"; });

