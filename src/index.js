import { getData } from "./dataRetriever"
import { layoutMain } from "./layoutManager";


(function () {
    layoutMain()
    getData();
})()