const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");


let futureDate = new Date(2021, 11, 17, 18, 30, 0);
// let futureDate = new Date();

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Vacation starts on ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}pm`;

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

let getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calculate

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  let format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h2 class="expired"> YAY, your vacation starts <b>NOW!</b> </h2>`
  }
};

//  countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
