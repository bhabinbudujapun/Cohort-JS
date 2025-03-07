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
    date.getHours >= 12 ? "AM" : "PM"
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

displayDigitalTime();
displayDateTime();