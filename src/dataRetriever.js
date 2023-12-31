/*
  Fetches data & extract Information 
*/

class WeatherAPI {
  constructor() {
    this.baseUrl = "https://api.weatherapi.com/v1/";
    this.key = "c6bbf07487324ab7956102416231012";
  }

  async fetchData(api, area, days = 3) {
    try {
      const response = await fetch(
        `${this.baseUrl}${api}?key=${this.key}&q=${area}&days=${days}`,
        { mode: "cors" },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error:" + error);
    }
  }

  async fetchForecast(area) {
    return this.fetchData("forecast.json", area);
  }

  fetchAreaList(area) {
    return this.fetchData("search.json", area, 1);
  }
} // end

async function getForecast(area = "dubai") {
  showPreloader(true);
  const weatherAPI = new WeatherAPI();
  const data = await weatherAPI.fetchForecast(area);

  if (Object.prototype.hasOwnProperty.call(data, "error")) {
    showPreloader(false);
    return data;
  }

  const location = getLocationInfo(data);
  const currentWeather = getCurrentWeatherInfo(data);
  const windInfo = getWindInfo(data);
  const foreCast = getNextDayForecast(data);
  showPreloader(false);

  return { location, currentWeather, windInfo, foreCast };
}

function getNextDayForecast(data) {
  const day = [];
  for (let i = 0; i < data.forecast.forecastday.length; i++) {
    day.push([
      formatDate(data.forecast.forecastday[i].date),
      getDayEquivalent(data.forecast.forecastday[i].date),
      data.forecast.forecastday[i].day.condition.icon,
      data.forecast.forecastday[i].day.condition.text,
      data.forecast.forecastday[i].day.avgtemp_c,
      data.forecast.forecastday[i].day.avghumidity,
      data.forecast.forecastday[i].day.maxwind_mph,
      data.forecast.forecastday[i].day.uv,
      data.forecast.forecastday[i].day.daily_chance_of_rain,
      data.forecast.forecastday[i].day.daily_chance_of_snow,
    ]);
  }
  return day;
}

async function getAreaList(area) {
  const weatherAPI = new WeatherAPI();
  const data = await weatherAPI.fetchAreaList(area);

  return data;
}

function getWindInfo(data) {
  const wind = data.current.wind_mph;
  const gust = data.current.gust_mph;
  const degree = data.current.wind_degree;
  const direction = data.current.wind_dir;

  return { wind, gust, direction, degree };
}

function getCurrentWeatherInfo(data) {
  // get current Info
  const status = data.current.condition.text;
  const code = data.current.condition.code;
  const icon = data.current.condition.icon;
  const temperature = data.current.temp_c;
  const feelsLike = data.current.feelslike_c;
  const humidity = data.current.humidity;
  const pressure = data.current.pressure_in;
  const precipitation = data.current.precip_mm;
  const cloud = data.current.cloud;
  const uvIndex = data.current.uv;

  return {
    status,
    code,
    temperature,
    feelsLike,
    humidity,
    pressure,
    precipitation,
    cloud,
    icon,
    uvIndex,
  };
}

// get location & time details
function getLocationInfo(data) {
  const country = data.location.country;
  const area = data.location.name;
  const { date, time, day, isDay } = extractDate(data.location.localtime);

  return { country, area, date, time, day, isDay };
}

function extractDate(localtime) {
  let [date, time] = localtime.split(" ");
  const day = getDayEquivalent(date);
  date = formatDate(date);
  const isDay = time.split(":")[0] >= 12 ? "PM" : "AM";

  return { date, day, time, isDay };
}

function getDayEquivalent(date) {
  const dateObj = new Date(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[dateObj.getDay()];
  return dayName;
}

function formatDate(date) {
  const dateObj = new Date(date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return formattedDate;
}

function showPreloader(status = false) {
  const preloader = document.querySelector(".preloader");
  if (status) {
    preloader.classList.add("visible");
  } else {
    preloader.classList.remove("visible");
  }
}

export { getForecast, getAreaList, showPreloader };
