import { createDocu } from "./createDocumentStructure";
import { getInfo } from "./dataRetriever";
import { updateContent } from "./layoutManager";

import "./style.css";

(async function () {
  const doc = createDocu();
  const data = await getInfo();
  updateContent(doc, data)

  doc.search.button.addEventListener('click', async (event) => {
    event.preventDefault()
    const data = await getInfo(doc.search.input.value);
    updateContent(doc, data)
  })
})();


