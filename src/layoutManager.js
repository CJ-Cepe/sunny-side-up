/*
  For setting html elements text values
*/
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";

function updateContent(doc, data) {
  setGradient(doc, data);
  setLocation(doc, data);
  setCurrent(doc, data);
  setWind(doc, data);

  setForecast(doc, data);
  setFontSizes(doc);
}

function setLocation(doc, data) {
  doc.location.country.textContent = data.location.country;
  doc.location.area.textContent = data.location.area;
  doc.location.day.textContent = data.location.day;
  doc.location.date.textContent = data.location.date;
  doc.location.time.textContent =
    data.location.time + " " + data.location.isDay;
  doc.location.img.src = setImage(data.location.isDay);
  updateFilter(data.location.isDay, doc.containers.filter);
}

function setImage(isDay) {
  if (isDay === "AM") {
    return sun;
  } else {
    return moon;
  }
}
//condition, image, temperature, feelsLike, cloud, humidity, precipitation, pressure
function setCurrent(doc, data) {
  doc.currentWeather.condition.textContent = data.currentWeather.status;
  doc.currentWeather.image.src = data.currentWeather.icon;
  doc.currentWeather.temperature.textContent =
    Math.round(data.currentWeather.temperature * 10) / 10;
  doc.currentWeather.feelsLike.textContent = data.currentWeather.feelsLike;
  doc.currentWeather.cloud.textContent = data.currentWeather.cloud;
  doc.currentWeather.humidity.textContent = data.currentWeather.humidity;
  doc.currentWeather.precipitation.textContent =
    data.currentWeather.precipitation;
  doc.currentWeather.pressure.textContent = data.currentWeather.pressure;
}

//return {wind, gust, degree, uvIndex}
function setWind(doc, data) {
  doc.windInfo.wind.textContent = data.windInfo.wind;
  doc.windInfo.gust.textContent = data.windInfo.gust;
  doc.windInfo.degree.style.transform = `rotate(${data.windInfo.degree}deg)`;
  doc.windInfo.uvIndex.textContent = data.windInfo.uvIndex;
}

function setForecast(doc, data) {
  console.log(data);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
      if (doc.forecast[i][j].tagName != "IMG") {
        doc.forecast[i][j].textContent = data.foreCast[i][j];
      } else {
        doc.forecast[i][j].src = data.foreCast[i][j];
      }
    }
  }
}

function setGradient(doc, data) {
  let bg = doc.containers.body.style;
  let code = data.currentWeather.code;

  if (1000 === code) {
    bg.backgroundColor = "var(--bg-1)";
    bg.backgroundImage = "var(--bg-img-1)";
  } else if ([1003, 1006, 1009, 1030].includes(code)) {
    bg.backgroundColor = "var(--bg-2)";
    bg.backgroundImage = "var(--bg-img-2)";
  } else if (
    [
      1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246, 1273, 1276,
    ].includes(code)
  ) {
    bg.backgroundColor = "var(--bg-3)";
    bg.backgroundImage = "var(--bg-img-3)";
  } else if (
    [
      1066, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1261, 1264, 1279,
      1282, 1069,
    ].includes(code)
  ) {
    bg.backgroundColor = "var(--bg-4)";
    bg.backgroundImage = "var(--bg-img-4)";
  } else if ([1069, 1072, 1204, 1207, 1249, 1252].includes(code)) {
    bg.backgroundColor = "var(--bg-5)";
    bg.backgroundImage = "var(--bg-img-5)";
  } else if ([1150, 1153, 1168, 1171].includes(code)) {
    bg.backgroundColor = "var(--bg-6)";
    bg.backgroundImage = "var(--bg-img-6)";
  } else if ([1198, 1201].includes(code)) {
    bg.backgroundColor = "var(--bg-7)";
    bg.backgroundImage = "var(--bg-img-7)";
  } else if ([1135, 1147].includes(code)) {
    bg.backgroundColor = "var(--bg-8)";
    bg.backgroundImage = "var(--bg-img-8)";
  } else if ([1114, 1117].includes(code)) {
    bg.backgroundColor = "var(--bg-9)";
    bg.backgroundImage = "var(--bg-img-9)";
  } else if (1237 === code) {
    bg.backgroundColor = "var(--bg-10)";
    bg.backgroundImage = "var(--bg-img-10)";
  } else {
    bg.backgroundColor = "var(--bg-11)";
    bg.backgroundImage = "var(--bg-img-11)";
  }
}

function updateFilter(isDay, filter) {
  if (isDay === "AM") {
    filter.style.backgroundColor = "rgba(16, 0, 60, 0)";
  } else {
    filter.style.backgroundColor = "rgba(16, 0, 60, 0.4)";
  }
}

function setFontSizes(doc) {
  //country
  adjustFontSize(doc.location.country, 1);

  //location name
  adjustFontSize(doc.location.area, 2);

  //temperature
  adjustFontSize(doc.currentWeather.temperature, 3);
}

//Get text length of content
//Passed on a function
function adjustFontSize(elem, flag) {
  elem.style.fontSize = computeFontSize(elem.textContent.length, flag);
}

//
function computeFontSize(textLength, flag) {
  let baseSize, fontSize, constant, minSize;

  switch (flag) {
    case 1:
      baseSize = 15;
      constant = 1;
      fontSize = 2;
      minSize = 1;
      break;
    case 2:
      baseSize = 10;
      constant = 3;
      fontSize = 4;
      minSize = 2;
      break;
    case 3:
      baseSize = 4;
      constant = 6;
      fontSize = 8;
      minSize = 2;
      break;
  }

  if (textLength >= baseSize) {
    textLength = baseSize - constant;
    fontSize = baseSize - textLength;
  }

  return `max(${minSize}rem, ${fontSize}cqi)`;
}

export { updateContent };

/* function computeFontSize(textLength) {
  let fontSize = 4,
    baseLength = 10;

  if (textLength >= baseLength) {
    textLength = baseLength - 3;
    fontSize = baseSize - textLength;
  }
  console.log(fontSize)
  return `max(1.5rem, ${fontSize}cqi)`;
} */
