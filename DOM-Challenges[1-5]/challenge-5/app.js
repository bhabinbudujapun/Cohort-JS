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

// create carousel indicator
const carouselNav = document.getElementById("carouselNav");
for (let i = 0; i < totalImages; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", i);
  div.classList.add("carousel-indicator");
  carouselNav.appendChild(div);
}

// reference of next and previous button
const nextButtonElement = document.getElementById("nextButton");
const prevButtonElement = document.getElementById("prevButton");

// select carousel-track
const imgContainer = document.getElementById("carouselTrack");

// create image element and append require attributes
const img = document.createElement("img");
img.classList.add("carousel-image");
img.src = images[value].url;

// create span element for store caption
const caption = document.getElementById("caption");
caption.innerText = images[value].caption;

// add default carousel indicator
carouselNav.children[0].classList.add("active");

// add image and caption on image container
imgContainer.appendChild(caption);
imgContainer.appendChild(img);

// add carousel indicator
function addCarouselIndicator(carouselNumber) {
  for (let i = 0; i < totalImages; i++) {
    if (i === carouselNumber) {
      carouselNav.children[i].classList.add("active");
    } else {
      carouselNav.children[i].classList.remove("active");
    }
  }
}

// update carousel
function updateCarousel(index) {
  img.src = images[index].url;
  imgContainer.appendChild(img);
  caption.innerText = images[index].caption;
  addCarouselIndicator(index);
}

// next event
nextButtonElement.addEventListener("click", () => {
  if (value < totalImages - 1) {
    value += 1;
    updateCarousel(value);
  } else {
    value = 0;
    updateCarousel(value);
  }
});

// previous event
prevButtonElement.addEventListener("click", () => {
  if (value > 0) {
    value -= 1;
    updateCarousel(value);
  } else {
    value = totalImages - 1;
    updateCarousel(value);
  }
});

// auto-play carousel
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

autoPlayButton.addEventListener("click", () => {
  autoPlayButton.classList.toggle("active");
  if (autoPlayButton.classList.contains("active")) {
    autoPlayButton.textContent = "Stop Auto Play";
    let countDown = 5;
    const intervalId = setInterval(() => {
      timerDisplay.textContent = `Next Slide in ${countDown}`;
      countDown--;

      if (countDown < 0) {
        countDown = 5;
        if (value === 3) value = -1;
        value += 1;
        img.src = images[value].url;
        imgContainer.appendChild(img);
        caption.innerText = images[value].caption;
        addCarouselIndicator(value);
      }
    }, 1000);

    autoPlayButton.dataset.intervalId = intervalId;
  } else {
    autoPlayButton.textContent = "Start Auto Play";
    const intervalId = autoPlayButton.dataset.intervalId;
    clearInterval(intervalId);
    timerDisplay.textContent = "";
  }
});
