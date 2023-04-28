const WeatherClient = require('./weatherClient')
const Weather = require('./weather');

jest.mock('./weather');

describe('WeatherClient', () => {
  let weatherClient;

  beforeEach(() => {
    weatherClient = new WeatherClient('mockiId');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('fetchWeatherData', () => {
    it('should return the weather data for a given city', async () => {
      const city = 'NewYork';
      const weatherData = {
        getCity: ()=>'NewYork',
        getTemp: ()=>20,
        getFells: ()=>15,
        getMin: ()=>10,
        getMax: ()=>25,
        getHumidity: ()=>50
      };

       mockFetch = jest.fn().mockResolvedValueOnce({
        json: () => Promise.resolve(weatherData)
      });

      weatherClient.fetch = mockFetch;

      const result = await weatherClient.fetchWeatherData(city);

      expect(mockFetch).toHaveBeenCalledWith(
        'http://api.openweathermap.org/data/2.5/weather?units=metric&q=NewYork&appid=mockiId'
      );
      
      expect(result.getCity()).toEqual('NewYork');
      expect(result.getTemp()).toBe(20);
      expect(result.getFells()).toBe(15);
      
    });

    })
    })
