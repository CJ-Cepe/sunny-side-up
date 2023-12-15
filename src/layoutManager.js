/*
  For setting html elements text values
*/
function setLocation(doc, data) {
  doc.location.country.textContent = data.location.country;
  doc.location.area.textContent = data.location.area;
  doc.location.day.textContent = data.location.day;
  doc.location.date.textContent = data.location.date;
  doc.location.time.textContent =
    data.location.time + " " + data.location.isDay;
}

//condition, image, temperature, feelsLike, cloud, humidity, precipitation, pressure
function setCurrent(doc, data) {
  doc.currentWeather.condition.textContent = data.currentWeather.status;
  doc.currentWeather.temperature.textContent = "Temperature: " + data.currentWeather.temperature;
  doc.currentWeather.feelsLike.textContent = "Feels Like: " + data.currentWeather.feelsLike;
  doc.currentWeather.cloud.textContent = "Cloud: " + data.currentWeather.cloud;
  doc.currentWeather.humidity.textContent = "Humidity: " + data.currentWeather.humidity;
  doc.currentWeather.precipitation.textContent = "Precipitation: " + data.currentWeather.precipitation;
  doc.currentWeather.pressure.textContent = "Pressure: " + data.currentWeather.pressure;
}

export { setLocation, setCurrent };
