const clockTitle = document.querySelector(".js-clock");

function getTimer() {
  const date = new Date();
  const christmas = new Date(date.getFullYear(), 11, 25);
  const untilChristmas = christmas - date;

  const dDay = String(
    Math.floor(untilChristmas / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const dHours = String(
    Math.floor((untilChristmas / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const dMinutes = String(
    Math.floor((untilChristmas / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const dSeconds = String(Math.floor((untilChristmas / 1000) % 60)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${dDay}d ${dHours}h ${dMinutes}m ${dSeconds}s`;
}

getTimer();
setInterval(getTimer, 1000);
