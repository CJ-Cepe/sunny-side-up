import { createDocu } from "./createDocumentStructure";
import { getForecast } from "./dataRetriever";
import { updateContent } from "./layoutManager";

import { getPosition } from "./locationRetriever";

import "./styles/style.css";
import "./styles/location.css";
import "./styles/forecast.css";
import "./styles/wind.css";
import "./styles/others.css";

(async function () {
  const doc = createDocu();
  const position = await getPosition();
  const data = await getForecast(position);
  updateContent(doc, data);

  //what if empty input and clicked
  doc.search.button.addEventListener("click", async (event) => {
    event.preventDefault();
    const data = await getForecast(doc.search.input.value);
    updateContent(doc, data);
  });

  //what if user denied
  doc.getLocation.getLocationBtn.addEventListener("click", async () => {
    const position = await getPosition();
    const data = await getForecast(position);
    updateContent(doc, data);
  });
})();
