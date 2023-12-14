import { getData, getInfo } from "./dataRetriever";
import { layoutMain } from "./layoutManager";
import "./style.css";

(async function () {
  layoutMain();
  const data = await getInfo();
  console.log(data)
})();
