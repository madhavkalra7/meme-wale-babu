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
