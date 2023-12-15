//
async function getData() {
  const baseUrl = "http://api.weatherapi.com/v1/";
  const key = "c6bbf07487324ab7956102416231012";
  const api = "current.json";
  const search = "search.json";
  const forcast = "forecast.json";
  const history = "history.json";

  try {
    const response = await fetch(
      `${baseUrl}${forcast}?key=${key}&q=canada&days=3`,
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
  const data = await getData();

  //get location & time details
  const country = data.location.country;
  const area = data.location.name;
  const { date, time, day, isDay } = extractDate(data.location.localtime);

  //get current Info
  const status = data.current.condition.text
  const temperature = data.current.temp_c
  const feelsLike = data.current.feelslike_c
  const humidity = 

  return { country, area, date, time, day, isDay };
}

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

export { getInfo };
