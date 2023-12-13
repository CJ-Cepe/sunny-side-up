/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVEsRUFBRSxJQUFJLE9BQU8sSUFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhLFFBQVEsR0FBRyxRQUFRLE9BQU8sSUFBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSxRQUFRLEdBQUcsUUFBUSxPQUFPLElBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Vubnktc2lkZS11cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gdHJ5V2VhdGhlcigpe1xyXG4gICAgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9cIlxyXG4gICAgY29uc3Qga2V5ID0gXCJjNmJiZjA3NDg3MzI0YWI3OTU2MTAyNDE2MjMxMDEyXCJcclxuICAgIGNvbnN0IGFwaSA9IFwiY3VycmVudC5qc29uXCJcclxuICAgIGNvbnN0IHNlYXJjaCA9ICdzZWFyY2guanNvbidcclxuICAgIGNvbnN0IGZvcmNhc3QgPSAnZm9yZWNhc3QuanNvbidcclxuICAgIGNvbnN0IGhpc3RvcnkgPSAnaGlzdG9yeS5qc29uJ1xyXG5cclxuICAgIGZldGNoKGAke2Jhc2VVcmx9JHthcGl9P2tleT0ke2tleX0mcT1tYW5pbGFgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgfVxyXG4gICAgKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2NhdGlvbi5jb3VudHJ5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9jYXRpb24ubmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmN1cnJlbnQuY2xvdWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxyXG4gICAgfSlcclxuXHJcbiAgICBmZXRjaChgJHtiYXNlVXJsfSske2ZvcmNhc3R9P2tleT0ke2tleX0mcT1tYW5pbGEmZGF5cz0zYClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgIH1cclxuICAgICkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxyXG4gICAgfSlcclxuXHJcbiAgICBmZXRjaChgJHtiYXNlVXJsfSske2hpc3Rvcnl9P2tleT0ke2tleX0mcT1tYW5pbGEmZGF5cz0zJmR0PTIwMjMtMTItMTAmZHQ9MjAyMy0xMi0xMWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICB9XHJcbiAgICApLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJylcclxuICAgIH0pXHJcbiAgICBcclxufSBcclxuXHJcbnRyeVdlYXRoZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==