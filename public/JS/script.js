//variaveis
const apiKey = "e8ad407005de218297bfb0894a9ca803"
const apiCountryUrl = "https://flagsapi.com/"
const apiUnsplash = "https://source.unsplash.com/1600x900/?"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")

const errorMessageContainer = document.querySelector("#error-message")


//funções
const getWeatherData = async (city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()


    return data

}

// Tratamento de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide")
}

const hideInformation = () => {
  errorMessageContainer.classList.add("hide")
  weatherContainer.classList.add("hide")

}


const showWeatherData = async (city) => {

  hideInformation()

  const data = await getWeatherData(city)

  if (data.cod === "404") {
    showErrorMessage();
    return
  }

  cityElement.innerText = data.name
  tempElement.innerText = parseInt(data.main.temp)
  descElement.innerText = data.weather[0].description
  weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
  countryElement.setAttribute("src", apiCountryUrl + data.sys.country + "/flat/32.png")
  humidityElement.innerText = `${data.main.humidity}%`
  windElement.innerText = `${data.wind.speed}km/h`

  document.body.style.backgroundImage = `url("${apiUnsplash + city}")`
  

  weatherContainer.classList.remove("hide")
}


//eventos

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)
})

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value

    showWeatherData(city)
  }
})
