let optPlace = {
    alias: 'p',
    desc: 'Nombre de la ciudad de la que se desea obtener el pronóstico del tiempo',
    demand: true
};


// app --place Medellin
// app -p Medellin
// app get-weather --place Necocli
// app get-weather -p Necocli
const argv = require('yargs')
    .command('get-weather', 'Obtiene el estado del tiempo de una ciudad en específico', {
        place: optPlace
    })
    .options({ place: optPlace })
    .help()
    .argv;

module.exports = {
    argv
}

// console.log(argv);