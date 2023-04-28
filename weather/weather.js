class Weather{
  constructor(data){
    this.city = data.name
    this.temp = data.temp
    this.feels_like = data.feels_like
    this.temp_min = data.temp_min
    this.temp_max = data.temp_max
    this.humidity = data.humidity
  }

  getCity(){
    return this.city
  }

  getTemp(){
    return this.temp
  }
  getFells(){
    return this.feels_like
  }
  getMin(){
    return this.temp_min
  }
  getMax(){
    return this.temp_max
  }
  getHumidity(){
    return this.humidity
  }
  compareWith(other){
    return (this.getMax() > other.getMax() ? this.getCity : other.getCity())
  }
}

module.exports = Weather;