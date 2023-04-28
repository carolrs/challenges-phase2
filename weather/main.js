//process is the way to pass args to a Node.js app 
const process = require('process');
const apiKey = process.argv[2]

const WeatherClient = require('./weatherClient')

//the weatherClient will receive apiKey as paramether 
const client = new WeatherClient(apiKey);

client.fetchWeatherData('Sao Paulo')
  .then((data) => {
  console.log(`Weather data for ${data.name}:`)
  console.log(data);
});

