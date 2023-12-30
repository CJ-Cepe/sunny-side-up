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
  const timer = 50000; // 5 mins
  const doc = createDocu();
  const timeout = new Promise((resolve) => setTimeout(resolve, 5000, null));
  let position = await Promise.race([getPosition(), timeout]);
  position = position || "manila";
  const data = await getForecast(position);
  updateContent(doc, data);
  startInterval();

  // submit
  doc.search.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // handle empty
    if (doc.search.input.value !== "") {
      const data = await getForecast(doc.search.input.value);
      if (!Object.prototype.hasOwnProperty.call(data, "error")) {
        position = doc.search.input.value;
        updateContent(doc, data);
        startInterval();
      }
    }
  });

  // get user location
  doc.getLocation.getLocationBtn.addEventListener("click", async () => {
    const newTimeout = new Promise((resolve) =>
      setTimeout(resolve, 5000, null),
    );
    const newPosition = await Promise.race([getPosition(), newTimeout]);
    showPreloader(false);
    if (newPosition) {
      position = newPosition;
      const newData = await getForecast(newPosition);
      updateContent(doc, newData);
      startInterval();
    }
  });

  // update content of current area every {timer} mins
  function startInterval() {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(async () => {
      const data = await getForecast(position);
      updateContent(doc, data);
    }, timer);
  }
})();
