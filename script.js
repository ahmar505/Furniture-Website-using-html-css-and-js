const images = [
  "leathersofa.png",
  "modernchair.png",
  "floorlamp.png"
];

let index = 0;

function showImage() {
  document.getElementById("sliderImage").src = images[index];
}

function nextSlide() {
  index = (index + 1) % images.length;
  showImage();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}