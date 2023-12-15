import { createDocu } from "./createDocumentStructure";
import { getData, getInfo } from "./dataRetriever";
import { setLocation, setCurrent, setWind } from "./layoutManager";

import "./style.css";

(async function () {
  const doc = createDocu();
  const data = await getInfo();

  setLocation(doc, data);
  setCurrent(doc, data);
  setWind(doc, data);
})();
