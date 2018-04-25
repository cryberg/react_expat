import axios from 'axios';

const APIXU_WEATHER_BASE_URL = 'https://api.apixu.com/v1/forecast.json';
const APIXU_WEATHER_API_KEY = '302dd7d0dd234552aaf155014182004';
const APIXU_WEATHER_FORCAST_DAYS = 1;

class WeatherService {

    getDailyWeather = (enteredLocation) => {
        const url = `${APIXU_WEATHER_BASE_URL}?key=${APIXU_WEATHER_API_KEY}&q=${enteredLocation}&days=${APIXU_WEATHER_FORCAST_DAYS}`;
        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then(response => {
                    if (response && response.status === 200) {
                        const forecastObj = response.data.forecast.forecastday[0].day;

                        const locationName = (({name}) => ({name}))(response.data.location);

                        //Creates a string, i.e. "Amsterdam, North Holland, Netherlands" that can only apply to one location
                        const locationId = Object.values(((
                            {name, region, country}) => (
                            {name, region, country}))(response.data.location)).join(', ');

                        const weatherCurrent = ((
                            {temp_c, temp_f}) => (
                            {temp_c, temp_f}))(response.data.current);

                        const weatherForecast = ((
                            {maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition}) => (
                            {maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition}))(forecastObj);

                        const dailyWeather = Object.assign({}, locationName, {locationId}, weatherCurrent, weatherForecast);
                        resolve(dailyWeather);
                    } 
                }).catch(error => {
                    reject((!!error.response ? error.response.data.error.message : error.message));                    
                }
            );
        });
    };
}

export { WeatherService };