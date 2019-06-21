const argv = require('./config/yargs.config').argv;
const api = require('./core/rapid.api.core');
const isEmpty = require('is-empty');
const colors = require('colors');

api.SearchPlaceAsync(argv.place)
    .then(resp => !isEmpty(resp) ?
        console.log(resp) :
        console.log('La consulta no arrojo ningún resultado'.red))
    .catch(err => console.log(err.message.red));