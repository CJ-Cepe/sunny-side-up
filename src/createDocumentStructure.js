function createElements() {
  const body = document.querySelector("body");
  const mainCont = document.createElement("main");

  //create main containers
  const logoCont = document.createElement("div");
  const emptyCont = document.createElement("div");
  const currDay = document.createElement("div");
  const locationCont = document.createElement("div");
  const searchCont = document.createElement("div");
  const windCont = document.createElement("div");
  const nextDay1 = document.createElement("div");
  const nextDay2 = document.createElement("div");
  const nextDay3 = document.createElement("div");
  body.appendChild(mainCont);
  mainCont.append(
    logoCont,
    emptyCont,
    currDay,
    locationCont,
    searchCont,
    windCont,
    nextDay1,
    nextDay2,
    nextDay3,
  );
  addClass(mainCont);

  //create location container elements
  const country = document.createElement("p");
  const area = document.createElement("p");
  const day = document.createElement("p");
  const date = document.createElement("p");
  const time = document.createElement("p");
  locationCont.append(country, area, day, date, time);
  const location = { country, area, day, date, time };

  //create logo container
  logoCont.textContent = "SunnySideUp"

  //create current Day content
  const condition = document.createElement("p");
  const image = new Image();
  const currentDay = document.createElement("div");
  const leftCont = document.createElement("div");
  const rightCont = document.createElement("div");
  const temperature = document.createElement("p");
  const feelsLike = document.createElement("p");
  const cloud = document.createElement("p");
  const humidity = document.createElement("p");
  const precipitation = document.createElement("p");
  const pressure = document.createElement("p");
  currDay.append(condition, image, currentDay)
  currentDay.append(leftCont, rightCont)
  rightCont.append(feelsLike, cloud, humidity, precipitation, pressure)
  leftCont.append(temperature)
  const current = {condition, image, temperature, feelsLike, cloud, humidity, precipitation, pressure}

  return { current, location };
}

function addClass(mainCont) {
  const containers = mainCont.querySelectorAll("div");
  containers.forEach((container) => {
    container.classList.add("cont");
  });
}

export { createElements };
