import { createDocu } from "./createDocumentStructure";
import { getForecast } from "./dataRetriever";
import { updateContent } from "./layoutManager";

import "./style.css";

(async function () {
  const doc = createDocu();
  const data = await getForecast();
  updateContent(doc, data);

  doc.search.button.addEventListener("click", async (event) => {
    event.preventDefault();
    const data = await getForecast(doc.search.input.value);
    updateContent(doc, data);
  });
})();
