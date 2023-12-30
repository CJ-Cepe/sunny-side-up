import { createDocu } from "./createDocumentStructure";
import { getForecast, showPreloader } from "./dataRetriever";
import { updateContent } from "./layoutManager";
import { getPosition } from "./locationRetriever";

import "./styles/style.css";
import "./styles/location.css";
import "./styles/forecast.css";
import "./styles/wind.css";
import "./styles/others.css";
import "./styles/current.css";
import "./styles/gradient.css";

(async function () {
  let intervalId;
  let timer = 50000; // 5 mins
  const doc = createDocu();
  const timeout = new Promise((resolve) => setTimeout(resolve, 5000, null));
  let position = await Promise.race([getPosition(), timeout]);
  position = position ? position : "manila";
  const data = await getForecast(position);
  updateContent(doc, data);
  startInterval()

  //what if empty input and clicked
  doc.search.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    //handle empty
    if (doc.search.input.value !== "") {
      const data = await getForecast(doc.search.input.value);
      //handle no matching location
      if (!data.hasOwnProperty("error")) {
        position = doc.search.input.value;
        updateContent(doc, data);
        startInterval()
      }
    }
  });

  //what if user denied
  doc.getLocation.getLocationBtn.addEventListener("click", async () => {
    const newTimeout = new Promise((resolve) =>
      setTimeout(resolve, 5000, null),
    );
    let newPosition = await Promise.race([getPosition(), newTimeout]);
    showPreloader(false);
    if (newPosition) {
      position = newPosition;
      const newData = await getForecast(newPosition);
      updateContent(doc, newData);
      startInterval()
    }
  });

  //update content of current area every {timer} mins
  function startInterval(){
    if(intervalId){
      console.log('clear Interval')
      clearInterval(intervalId)
    }

    intervalId = setInterval(async () => {
        const data = await getForecast(position);
        console.log("watermelon: ", position);
        updateContent(doc, data);
      }, timer);
    }
})();
