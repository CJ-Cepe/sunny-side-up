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
  const doc = createDocu();
  const timeout = new Promise((resolve) => setTimeout(resolve, 5000, null));
  let position = await Promise.race([getPosition(), timeout]);
  position = position ? position : "manila";
  const data = await getForecast(position);
  updateContent(doc, data);

  //what if empty input and clicked
  doc.search.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    //handle empty
    if (doc.search.input.value !== "") {
      const data = await getForecast(doc.search.input.value);
      //handle no matching location
      if (!data.hasOwnProperty("error")) {
        updateContent(doc, data);
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
      const newData = await getForecast(newPosition);
      updateContent(doc, newData);
    }
  });
  
})();
