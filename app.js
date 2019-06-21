const argv = require('./config/yargs.config').argv;
const apiRapid = require('./core/rapid.api.core');
const apiOpenWeather = require('./core/openweathermap.api.core');
const isEmpty = require('is-empty');
const colors = require('colors');

apiRapid.SearchPlaceAsync(argv.place)
    .then(resp => {
        if (isEmpty(resp)) {
            console.log('La consulta no arrojo ningún resultado'.red);
            return;
        }

        // console.log(resp);
        apiOpenWeather.GetWeatherByCoordinatesAsync(parseFloat(resp[0].lat), parseFloat(resp[0].lon))
            .then(resp => {
                if (isEmpty(resp)) {
                    console.log('La consulta no arrojo ningún resultado'.red);
                    return;
                }

                console.log(`============= Estado del clima en [${resp.name} ${resp.sys.country}] ===============`.blue);
                console.log(`Coordenadas: lat: ${resp.coord.lat} | lon: ${resp.coord.lon}`.green);
                console.log(`Temperatura Ahora: ${resp.main.temp} °C`.green);
                console.log(`Temperatura Mínima: ${resp.main.temp_min} °C`.green);
                console.log(`Temperatura Máxima: ${resp.main.temp_max} °C`.green);
                console.log(`Visibilidad: ${resp.visibility}`.green);
                console.log('=============================================================='.blue);
            })
            .catch(err => console.log(err.message.red));;
    })
    .catch(err => console.log(err.message.red));