/*
  For creating html Elements
*/

import arrow from "./assets/arrow.svg";
import search from "./assets/search.svg";
import icon from "./assets/icon.png";
import preloadAnimatedSvg from "./assets/rainy-3.svg";
import locationPin from "./assets/location-pin.svg";

import { getAreaList } from "./dataRetriever";

function createDocu() {
  const containers = createMainContainers();
  setLogoElements(containers.logoCont);
  const location = setLocationElements(containers.locationCont);
  const currentWeather = setCurrentWeatherElements(
    containers.currentWeatherCont,
  );
  const windInfo = setWindInfoElements(containers.windInfoCont);
  const search = setSearchElements(containers.searchCont);
  const getLocation = setLocationCont(containers.getLocationCont);
  const forecast = setNextDayElements([
    containers.nextDayWeatherCont1,
    containers.nextDayWeatherCont2,
    containers.nextDayWeatherCont3,
  ]);

  return {
    containers,
    location,
    currentWeather,
    windInfo,
    search,
    getLocation,
    forecast,
  };
}

function createMainContainers() {
  const body = document.querySelector("body");
  const preloader = document.createElement("div");
  const preloadIcon = document.createElement("img");
  const filter = document.createElement("div");
  const mainCont = document.createElement("main");

  const logoCont = document.createElement("div");
  const getLocationCont = document.createElement("div");
  const currentWeatherCont = document.createElement("div");
  const locationCont = document.createElement("div");
  const searchCont = document.createElement("div");
  const windInfoCont = document.createElement("div");
  const forecastCont = document.createElement("div");
  const nextDayWeatherCont1 = document.createElement("div");
  const nextDayWeatherCont2 = document.createElement("div");
  const nextDayWeatherCont3 = document.createElement("div");

  filter.classList.add("filter");
  preloader.classList.add("preloader");
  preloader.appendChild(preloadIcon);
  preloadIcon.src = preloadAnimatedSvg;

  body.append(filter, mainCont, preloader);
  forecastCont.append(
    nextDayWeatherCont1,
    nextDayWeatherCont2,
    nextDayWeatherCont3,
  );
  mainCont.append(
    logoCont,
    getLocationCont,
    currentWeatherCont,
    locationCont,
    searchCont,
    windInfoCont,
    forecastCont,
  );

  // setting classes
  addClassToChild(mainCont, "cont");
  forecastCont.classList.remove("cont");
  forecastCont.classList.add("forecastCont");

  return {
    body,
    logoCont,
    getLocationCont,
    currentWeatherCont,
    locationCont,
    searchCont,
    windInfoCont,
    nextDayWeatherCont1,
    nextDayWeatherCont2,
    nextDayWeatherCont3,
    filter,
  };

  function addClassToChild(element, classToAdd) {
    const containers = element.querySelectorAll(`div`);
    containers.forEach((container) => {
      container.classList.add(classToAdd);
    });
  }
}

function setLogoElements(logoCont) {
  const image = new Image();
  const content = document.createElement("p");
  content.textContent = "SunnySideUp";
  image.src = icon;
  logoCont.append(image, content);
}

// for location
function setLocationCont(getLocationCont) {
  const getLocationBtn = document.createElement("button");
  const img = document.createElement("img");
  img.src = locationPin;

  getLocationCont.appendChild(getLocationBtn);
  getLocationBtn.appendChild(img);

  return { getLocationBtn };
}

function setLocationElements(locationCont) {
  // create location container elements
  const country = document.createElement("p");
  const area = document.createElement("p");
  const day = document.createElement("p");
  const date = document.createElement("p");
  const time = document.createElement("p");
  const img = document.createElement("img");
  const left = document.createElement("div");
  const dateCont = document.createElement("div");

  dateCont.append(day, date);
  left.append(country, area, dateCont, time);
  locationCont.append(left, img);

  return { country, area, day, date, time, img };
}

function setCurrentWeatherElements(currentWeatherCont) {
  // create current Day content
  const condition = document.createElement("p");
  const image = new Image();
  const rightCont = document.createElement("div");
  const divider = document.createElement("div");

  const today = document.createElement("p");
  today.textContent = "today";
  const temperature = document.createElement("P");

  const feelsLikeLabel = document.createElement("p");
  const feelsLike = document.createElement("span");
  feelsLikeLabel.textContent = "Feels Like ";
  feelsLikeLabel.appendChild(feelsLike);

  const cloudLabel = document.createElement("p");
  const cloud = document.createElement("span");
  cloudLabel.textContent = "Cloud ";
  cloudLabel.appendChild(cloud);

  const humidityLabel = document.createElement("p");
  const humidity = document.createElement("span");
  humidityLabel.textContent = "Humidity ";
  humidityLabel.appendChild(humidity);

  const precipitationLabel = document.createElement("p");
  const precipitation = document.createElement("span");
  precipitationLabel.textContent = "Precipitation ";
  precipitationLabel.appendChild(precipitation);

  const pressureLabel = document.createElement("p");
  const pressure = document.createElement("span");
  pressureLabel.textContent = "Pressure ";
  pressureLabel.appendChild(pressure);

  const uvIndexLabel = document.createElement("p");
  const uvIndex = document.createElement("span");
  uvIndexLabel.textContent = "UV Index ";
  uvIndexLabel.appendChild(uvIndex);

  currentWeatherCont.append(
    today,
    condition,
    temperature,
    image,
    feelsLikeLabel,
    uvIndexLabel,
    divider,
    rightCont,
  );
  rightCont.append(
    cloudLabel,
    humidityLabel,
    precipitationLabel,
    pressureLabel,
  );

  return {
    condition,
    image,
    temperature,
    feelsLike,
    cloud,
    humidity,
    precipitation,
    pressure,
    uvIndex,
  };
}

function setWindInfoElements(windInfoCont) {
  const windCont = document.createElement("div");
  const gustCont = document.createElement("div");
  const degreeCont = document.createElement("div");
  const directionCont = document.createElement("div");

  const windLabel = document.createElement("p");
  const windValue = document.createElement("p");
  const gustLabel = document.createElement("p");
  const gustValue = document.createElement("p");
  const degreeLabel = document.createElement("p");
  const degreeValue = new Image();
  const directionLabel = document.createElement("p");
  const directionValue = document.createElement("p");

  windInfoCont.append(windCont, gustCont, directionCont, degreeCont);
  windCont.append(windLabel, windValue);
  gustCont.append(gustLabel, gustValue);
  degreeCont.append(degreeLabel, degreeValue);
  directionCont.append(directionLabel, directionValue);

  // To transfer - add label contents
  windLabel.textContent = "Wind";
  gustLabel.textContent = "Gust";
  directionLabel.textContent = "Direction";
  degreeLabel.textContent = "Degree";
  degreeValue.src = arrow;

  return {
    wind: windValue,
    gust: gustValue,
    degree: degreeValue,
    direction: directionValue,
  };
}

function setSearchElements(searchCont) {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const img = document.createElement("img");
  const datalist = document.createElement("datalist");

  searchCont.appendChild(form);
  form.append(input, button, datalist);
  button.appendChild(img);

  input.type = "input";
  input.setAttribute("list", "areas");
  input.placeholder = "Search Places";
  input.required = "true";
  input.pattern = "[a-zA-Z]+";
  input.oninvalid = "setCustomValidity('Please enter on alphabets only. ')";
  img.src = search;
  button.type = "submit";
  datalist.id = "areas";

  // search bar suggestion
  input.addEventListener("input", async () => {
    datalist.textContent = "";
    // check if input value is empty or not
    if (input.value.length !== 0) {
      const searchList = await getAreaList(input.value);
      // check if returned array is empty
      if (searchList.length !== 0) {
        searchList.forEach((element) => {
          const option = document.createElement("option");
          option.value = element.name;
          datalist.appendChild(option);
        });
      }
    }
  });
  return { input, form };
}

export { createDocu };

function setNextDayElements(days) {
  const content = [
    "temperature",
    "humidity",
    "wind",
    "UV index",
    "Rain Chance",
    "Snow Chance",
  ];
  const nextDay = [];
  for (let i = 0; i < 3; i++) {
    const elements = [];
    const date = document.createElement("p");
    const day = document.createElement("p");
    const status = document.createElement("p");
    const image = document.createElement("img");
    const infoCont = document.createElement("div");

    elements.push(date, day, image, status);
    days[i].append(date, day, image, status, infoCont);
    for (let j = 0; j < 6; j++) {
      const p = document.createElement("p");
      const span = document.createElement("span");
      p.textContent = content[j];
      p.appendChild(span);
      infoCont.appendChild(p);
      elements.push(span);
    }
    nextDay.push(elements);
  }
  return nextDay;
}
