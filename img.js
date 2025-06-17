let currentImageIndex = 0;
let images = [];

window.onload = function () {
  // Get all images in the gallery once the page loads
  images = Array.from(document.querySelectorAll('.gallery img'));
};

function showImage(imgElement) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");

  currentImageIndex = images.indexOf(imgElement); // Track clicked image index
  popupImg.src = imgElement.src;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("popup-img").src = images[currentImageIndex].src;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("popup-img").src = images[currentImageIndex].src;
}
