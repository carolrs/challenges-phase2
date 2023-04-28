const Weather = require('./weather')

test ('mapping the class weather', ()=>{
  mockData = {
    name: 'New York',
    temp: 20,
    feels_like: 15,
    temp_min: 8,
    temp_max: 22,
    humidity: 2,
  }

  weather = new Weather(mockData)

  expect(weather.getCity()).toEqual('New York')
  expect(weather.getTemp()).toEqual(20)
  expect(weather.getFells()).toEqual(15)
  expect(weather.getMin()).toEqual(8)
  expect(weather.getMax()).toEqual(22)
  expect(weather.getHumidity()).toEqual(2)

})


test ('mapping the class weather', ()=>{
  mockNewYorkData = {
    name: 'New York',
    temp: 20,
    feels_like: 15,
    temp_min: 8,
    temp_max: 22,
    humidity: 2,
  }

  mockSaoPauloData= {
    name: 'Sao Paulo',
    temp: 28,
    feels_like: 28,
    temp_min: 18,
    temp_max: 30,
    humidity: 11,
  }

  newYork = new Weather(mockNewYorkData)
  saoPaulo = new Weather(mockSaoPauloData)

console.log(newYork.compareWith(saoPaulo))

})



