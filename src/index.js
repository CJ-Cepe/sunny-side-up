import { getData, getInfo } from "./dataRetriever";
import { layoutMain, setLocation } from "./layoutManager";
import "./style.css";

(async function () {
  const doc = layoutMain();
  const data = await getInfo();
  
  setLocation(doc, data)
})();
