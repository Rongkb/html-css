var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var temperature = document.querySelector('.temperature')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')



async function changWeatherUI() {
    let capitalSearch = search.value.trim()
    if (!capitalSearch) {
        capitalSearch = 'ha noi'
    }
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=d640940994c676af339da5d8ab4d000d`
    let data = await fetch(apiURL).then(res => res.json())
    console.log(data.cod)

    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name;
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + ' m'
        wind.innerText = data.wind.speed + ' m/s'
        sun.innerText = data.main.humidity + ' %'
        let temp = temperature.innerText = Math.round((data.main.temp - 273.15))
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'cold')
        if (temp < 27) {
            body.setAttribute('class', 'cool')
        }
        if (temp < 22) {
            body.setAttribute('class', 'warm')
        }
        if (temp < 19) {
            body.setAttribute('class', 'cold')
        }

    } else {
        content.classList.add('hide')
    }
}
search.addEventListener('keypress', function (e) {

    if (e.code === 'Enter') {
        changWeatherUI()
        search.value = ''

    }
})
changWeatherUI()
