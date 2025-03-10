// Select the required Elements for project
const digitalClock = document.querySelector(".digital-clock");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const dateElement = document.querySelector(".date");

function displayDigitalTime() {
  const date = new Date();
  const hour = (date.getHours() % 12 || 12).toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);

  digitalClock.textContent = `${hour}:${minutes}:${second} ${
    date.getHours() >= 12 ? "PM" : "AM"
  }`;
}

function displayDateTime() {
  const date = new Date();

  // Days of the Week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Months of the Year
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dateElement.textContent = `${daysOfWeek[parseInt(date.getDay())]} 
  ${date.getDate().toString().padStart(2, 0)} ${
    monthsOfYear[parseInt(date.getMonth())]
  } ${date.getFullYear()}`;
}

function addClockNumbers() {
  const clock = document.querySelector(".clock");
  const radius = 140;

  for (let i = 1; i <= 12; i++) {
    const numberElement = document.createElement("div");
    numberElement.classList.add("number");

    numberElement.style.setProperty("--rotation", `${i * 30}deg`);
    numberElement.innerHTML = `<span>${i}</span>`;

    clock.appendChild(numberElement);
  }
}

function updateClockHands() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const secondDeg = seconds * 6; // 1 sec = 6° (360°/60)
  const minuteDeg = minutes * 6 + seconds * 0.1; // 1 min = 6° + small movement for seconds
  const hourDeg = hours * 30 + minutes * 0.5; // 1 hour = 30° + small movement for minutes

  // Apply rotation to hands
  document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(() => {
  updateClockHands();
  displayDigitalTime();
}, 1000);

addClockNumbers();
displayDateTime();
