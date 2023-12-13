
function tryWeather(){
    const baseUrl = "http://api.weatherapi.com/v1/"
    const key = "c6bbf07487324ab7956102416231012"
    const api = "current.json"
    const search = 'search.json'
    const forcast = 'forecast.json'
    const history = 'history.json'

    fetch(`${baseUrl}${api}?key=${key}&q=manila`)
    .then(response => {
       return response.json()
    }
    ).then(data => {
        console.log(data)
        console.log(data.location.country)
        console.log(data.location.name)
        console.log(data.current.cloud)
        console.log(data.current.condition.text)
    }).catch(err => {
        console.log('Error')
    })

    fetch(`${baseUrl}+${forcast}?key=${key}&q=manila&days=3`)
    .then(response => {
       return response.json()
    }
    ).then(data => {
        console.log(data)
    }).catch(err => {
        console.log('Error')
    })

    fetch(`${baseUrl}+${history}?key=${key}&q=manila&days=3&dt=2023-12-10&dt=2023-12-11`)
    .then(response => {
       return response.json()
    }
    ).then(data => {
        console.log(data)
    }).catch(err => {
        console.log('Error')
    })
    
} 

tryWeather()