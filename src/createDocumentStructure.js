/*
  For creating html Elements
*/
function createDocu() {
  const containers = createMainContainers();
  const location = setLocationElements(containers.locationCont);
  const currentWeather = setCurrentWeatherElements(
    containers.currentWeatherCont,
  );

  return { location, currentWeather };
}

function createMainContainers() {
  const body = document.querySelector("body");
  const mainCont = document.createElement("main");

  const logoCont = document.createElement("div");
  const emptyCont = document.createElement("div");
  const currentWeatherCont = document.createElement("div");
  const locationCont = document.createElement("div");
  const searchCont = document.createElement("div");
  const windInfoCont = document.createElement("div");
  const nextDayWeatherCont1 = document.createElement("div");
  const nextDayWeatherCont2 = document.createElement("div");
  const nextDayWeatherCont3 = document.createElement("div");
  body.appendChild(mainCont);
  mainCont.append(
    logoCont,
    emptyCont,
    currentWeatherCont,
    locationCont,
    searchCont,
    windInfoCont,
    nextDayWeatherCont1,
    nextDayWeatherCont2,
    nextDayWeatherCont3,
  );
  addClass(mainCont);

  return {
    logoCont,
    emptyCont,
    currentWeatherCont,
    locationCont,
    searchCont,
    windInfoCont,
    nextDayWeatherCont1,
    nextDayWeatherCont2,
    nextDayWeatherCont3,
  };

  //helper
  function addClass(mainCont) {
    const containers = mainCont.querySelectorAll("div");
    containers.forEach((container) => {
      container.classList.add("cont");
    });
  }
}

function setLocationElements(locationCont) {
  //create location container elements
  const country = document.createElement("p");
  const area = document.createElement("p");
  const day = document.createElement("p");
  const date = document.createElement("p");
  const time = document.createElement("p");

  locationCont.append(country, area, day, date, time);

  return { country, area, day, date, time };
}

function setCurrentWeatherElements(currentWeatherCont) {
  //create current Day content
  const condition = document.createElement("p");
  const image = new Image();
  const bottomCont = document.createElement("div");
  const leftCont = document.createElement("div");
  const rightCont = document.createElement("div");
  const temperature = document.createElement("p");
  const feelsLike = document.createElement("p");
  const cloud = document.createElement("p");
  const humidity = document.createElement("p");
  const precipitation = document.createElement("p");
  const pressure = document.createElement("p");

  currentWeatherCont.append(condition, image, bottomCont);
  bottomCont.append(leftCont, rightCont);
  rightCont.append(feelsLike, cloud, humidity, precipitation, pressure);
  leftCont.append(temperature);

  return {
    condition,
    image,
    temperature,
    feelsLike,
    cloud,
    humidity,
    precipitation,
    pressure,
  };
}
export { createDocu };
