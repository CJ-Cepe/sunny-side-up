import { createElements } from "./createDocumentStructure";


function layoutMain() {
  const doc = createElements();
  return doc
}


function setLocation(doc, data){
  doc.location.country.textContent = data.country
  doc.location.area.textContent = data.area
  doc.location.day.textContent = data.day
  doc.location.date.textContent = data.date
  doc.location.time.textContent = data.time + " " +data.isDay
}




export { layoutMain, setLocation };
