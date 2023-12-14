function getData() {
  const baseUrl = "http://api.weatherapi.com/v1/";
  const key = "c6bbf07487324ab7956102416231012";
  const api = "current.json";
  const search = 'search.json'
  const forcast = 'forecast.json'
  const history = 'history.json'

  fetch(`${baseUrl}${forcast}?key=${key}&q=canada&days=6`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      /*
      console.log(data.location.country);
      console.log(data.location.name);
      console.log(data.current.cloud);
      console.log(data.current.condition.text);
      console.log(data.current.feelslike_c);

      console.log(data.current.gust_kph);
      console.log(data.current.humidity);
      console.log(data.current.humidity) */
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

export { getData };
