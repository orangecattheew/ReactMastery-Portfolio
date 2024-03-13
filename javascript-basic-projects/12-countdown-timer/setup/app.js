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

const giveaway = document.querySelector(".giveaway");
const date = new Date();
let today = `${date}`;
console.log(`today is ${today}`);
let future = date.setDate(date.getDate() + 10);
console.log(today + "hello");
const options = {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
console.log(formattedDate);
giveaway.textContent = `giveaway ends on ${formattedDate}`;
