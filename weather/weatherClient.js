const Weather = require('./weather')

class WeatherClient{
  constructor(key){
   this.key = key;
   this.fetch = fetch;
  }

  fetchWeatherData(city) {
    var url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.key}`;
    return this.fetch(url)
    .then((response) => response.json())
  }

}
module.exports = WeatherClient;
