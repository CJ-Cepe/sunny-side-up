/*
  Fetches data & extract Information 
*/
async function fetchData() {
  const baseUrl = "http://api.weatherapi.com/v1/";
  const key = "c6bbf07487324ab7956102416231012";
  const api = "current.json";
  const search = "search.json";
  const forcast = "forecast.json";
  const history = "history.json";

  try {
    const response = await fetch(
      `${baseUrl}${forcast}?key=${key}&q=dubai&days=3`,
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error:" + error);
  }
}

//pure-getter
async function getInfo() {
  const data = await fetchData();
  const location = getLocationInfo(data);
  const currentWeather = getCurrentWeatherInfo(data);
  const windInfo = getWindInfo(data);

  return { location, currentWeather, windInfo };
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

export { getInfo };
