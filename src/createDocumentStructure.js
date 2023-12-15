/*
  For creating html Elements
*/

import arrow from "./assets/arrow.svg";
import { fetchAreaList } from "./dataRetriever";

function createDocu() {
  const containers = createMainContainers();
  const location = setLocationElements(containers.locationCont);
  const currentWeather = setCurrentWeatherElements(
    containers.currentWeatherCont,
  );
  const windInfo = setWindInfoElements(containers.windInfoCont);
  const search = setSearchElements(containers.searchCont)


  return { location, currentWeather, windInfo, search };
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

function setWindInfoElements(windInfoCont) {
  const windCont = document.createElement("div");
  const gustCont = document.createElement("div");
  const degreeCont = document.createElement("div");
  const uvIndexCont = document.createElement("div");

  const windLabel = document.createElement("p");
  const windValue = document.createElement("p");
  const gustLabel = document.createElement("p");
  const gustValue = document.createElement("p");
  const degreeLabel = document.createElement("p");
  const degreeValue = new Image();
  const uvIndexLabel = document.createElement("p");
  const uvIndexValue = document.createElement("p");

  windInfoCont.append(windCont, gustCont, degreeCont, uvIndexCont);
  windCont.append(windLabel, windValue);
  gustCont.append(gustLabel, gustValue);
  degreeCont.append(degreeLabel, degreeValue);
  uvIndexCont.append(uvIndexLabel, uvIndexValue);

  //To transfer - add label contents
  windLabel.textContent = "Wind";
  gustLabel.textContent = "Gust";
  degreeLabel.textContent = "Degree";
  uvIndexLabel.textContent = "UV";

  degreeValue.src = arrow;
  degreeValue.width = "50";
  degreeValue.height = "100";
  //add class windCont

  return {
    wind: windValue,
    gust: gustValue,
    degree: degreeValue,
    uvIndex: uvIndexValue,
  };
}

function setSearchElements(searchCont) {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const datalist = document.createElement("datalist")
  

  searchCont.appendChild(form);
  form.append(input, button, datalist);

  input.setAttribute('list', "areas");
  input.placeholder = "Enter Country"
  input.required = "true"
  button.textContent = "Search"
  button.type = "submit"
  datalist.id = "areas"

  //search bar suggestion
  input.addEventListener('input', async ()=>{
    datalist.textContent=""
    //check if input value is empty or not
    if(input.value.length !== 0){
      const searchList = await fetchAreaList(input.value)
      //check if returned array is empty
      if(searchList.length !== 0){
        console.log(searchList.length)
        searchList.forEach(element => {
          let option = document.createElement('option')
          option.value = element.name
          datalist.appendChild(option)
        })
      }
    }
  })
  return {input, button};
}

export { createDocu };
