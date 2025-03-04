/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const totalImages = images.length;
let value = 0;

const nextButtonElement = document.getElementById("nextButton");
const prevButtonElement = document.getElementById("prevButton");

// select carousel-track
const imgContainer = document.getElementById("carouselTrack");

// create image element and append require attributes
const img = document.createElement("img");
img.classList.add("carousel-image");
img.src = images[value].url;

// create span element for store caption
const span = document.createElement("span");
span.classList.add("carousel-caption");
span.textContent = images[value].caption;

// add image and caption on image container
imgContainer.appendChild(img);
imgContainer.appendChild(span);

// next event
nextButtonElement.addEventListener("click", () => {
  if (value < totalImages - 1) {
    value += 1;
    img.src = images[value].url;
    imgContainer.appendChild(img);
    span.textContent = images[value].caption;
  } else {
    value = 0;
    img.src = images[value].url;
    imgContainer.appendChild(img);
    span.textContent = images[value].caption;
  }
});

// previous event
prevButtonElement.addEventListener("click", () => {
  if (value > 0) {
    value -= 1;
    img.src = images[value].url;
    imgContainer.appendChild(img);
    span.textContent = images[value].caption;
  } else {
    value = totalImages - 1;
    img.src = images[value].url;
    imgContainer.appendChild(img);
    span.textContent = images[value].caption;
  }
});
