/*
  Fetches data & extract Information 
*/

class WeatherAPI {
  constructor() {
    this.baseUrl = "http://api.weatherapi.com/v1/";
    this.key = "c6bbf07487324ab7956102416231012";
  }

  async fetchData(api, area = "dubai", days = 3) {
    try {
      const response = await fetch(
        `${this.baseUrl}${api}?key=${this.key}&q=${area}&days=${days}`,
      );
      const data = await response.json();
      console.log(data);
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

//pure-getter
async function getForecast(area) {
  const weatherAPI = new WeatherAPI();
  const data = await weatherAPI.fetchForecast(area);
  console.log(data);
  const location = getLocationInfo(data);
  const currentWeather = getCurrentWeatherInfo(data);
  const windInfo = getWindInfo(data);

  return { location, currentWeather, windInfo };
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
  const uvIndex = data.current.uv;

  return { wind, gust, degree, uvIndex };
}

function getCurrentWeatherInfo(data) {
  //get current Info
  const status = data.current.condition.text;
  const temperature = data.current.temp_c;
  const feelsLike = data.current.feelslike_c;
  const humidity = data.current.humidity;
  const pressure = data.current.pressure_in;
  const precipitation = data.current.precip_mm;
  const cloud = data.current.cloud;

  return {
    status,
    temperature,
    feelsLike,
    humidity,
    pressure,
    precipitation,
    cloud,
  };
}

//get location & time details
function getLocationInfo(data) {
  const country = data.location.country;
  const area = data.location.name;
  const { date, time, day, isDay } = extractDate(data.location.localtime);

  return { country, area, date, time, day, isDay };

  //pure-helper
  function extractDate(localtime) {
    const [date, time] = localtime.split(" ");
    const day = getDayEquivalent(date);
    const isDay = time.split(":")[0] >= 12 ? "pm" : "am";

    return { date, day, time, isDay };
  }

  //pure-helper
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
}

export { getForecast, getAreaList };
