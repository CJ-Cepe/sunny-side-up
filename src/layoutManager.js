import { createElements } from "./createDocumentStructure";

function layoutMain() {
  const doc = createElements();
  return doc;
}

function setLocation(doc, data) {
  doc.location.country.textContent = data.country;
  doc.location.area.textContent = data.area;
  doc.location.day.textContent = data.day;
  doc.location.date.textContent = data.date;
  doc.location.time.textContent = data.time + " " + data.isDay;
}

//condition, image, temperature, feelsLike, cloud, humidity, precipitation, pressure
function setCurrent(doc, data){
  doc.current.condition.textContent;
  doc.current.temperature.textContent
  doc.current.feelsLike.textContent
  doc.current.cloud.textContent
  doc.current.humidity.textContent
  doc.current.precipitation.textContent
  doc.current.pressure.textContent
}

export { layoutMain, setLocation };
