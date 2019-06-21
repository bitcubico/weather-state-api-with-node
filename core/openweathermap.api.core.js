// https://www.npmjs.com/package/axios
const httpClient = require('axios');
const isEmpty = require('is-empty');

const urlBase = 'https://api.openweathermap.org/data/2.5';
const token = '71ca367d1b8f3136845d19400c79532b';
const units = 'metric';

const GetWeatherByCoordinatesAsync = async(latitude, longitude) => {
    if (!Number(latitude))
        throw new Error('El parámetro [latitude] debe ser numérico');

    if (!Number(longitude))
        throw new Error('El parámetro [longitude] debe ser numérico');

    // console.log(latitude, longitude);

    const response = await httpClient.get(`${urlBase}/weather`, {
        timeout: 2000,
        params: {
            lat: latitude,
            lon: longitude,
            appid: token,
            units: units
        }
    });

    console.log(response);
    return response.data;
}

module.exports = {
    GetWeatherByCoordinatesAsync
}