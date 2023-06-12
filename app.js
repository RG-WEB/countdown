const showDays = document.querySelector(".days");
const showHours = document.querySelector(".hours");
const showMins = document.querySelector(".mins");
const showSecs = document.querySelector(".seconds");
const subText = document.querySelector(".sub-text");
const deadline = document.querySelector(".container-time");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
const countdownDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const futureDate = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "full",
  timeStyle: "short",
}).format(countdownDate);

subText.innerText = `L'offre se termine le ${futureDate}`;

function countdown() {
  const dateNow = new Date().getTime();

  const distanceBase = countdownDate - dateNow;

  const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

  showDays.innerText = format(days);
  showHours.innerText = format(hours);
  showMins.innerText = format(minutes);
  showSecs.innerText = format(seconds);

  if (distanceBase < 0) {
    clearInterval(countDownInterval);
    deadline.innerHTML = `<h4 class="expired">désolé, l'offre a expiré</h4>`;
  }
}

countdown();

function format(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

const countDownInterval = setInterval(() => {
  countdown();
}, 1000);
