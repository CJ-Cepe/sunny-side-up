import { getData } from "./dataRetriever"
import { layoutMain } from "./layoutManager";
import './style.css';

(function () {
    layoutMain()
    getData();
})()