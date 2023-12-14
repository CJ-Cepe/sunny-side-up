//
async function getData() {
  const baseUrl = "http://api.weatherapi.com/v1/";
  const key = "c6bbf07487324ab7956102416231012";
  const api = "current.json";
  const search = "search.json";
  const forcast = "forecast.json";
  const history = "history.json";

  try {
    const response = await fetch(`${baseUrl}${forcast}?key=${key}&q=canada&days=6`);
    const data = await response.json()
    console.log(data)
    return data;
  } catch(error){
    console.log('Error:' + error)
  }
}

//pure-getter
async function getInfo(){
    const data = await getData()

    //get location & time details
    const country = data.location.country;
    const area = data.location.name;
    const {date, time, dayName} = extractDate(data.location.localtime)

    return {country, area, date, time, dayName}
}

//pure-helper
function extractDate(localtime){
    const [date, time] = localtime.split(" ")
    const dayName = getDayEquivalent(date)
    return { date, dayName, time }
}

//pure-helper
function getDayEquivalent(date){
    const dateObj = new Date(date)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[dateObj.getDay()]
    return dayName;
}

export { getInfo };
