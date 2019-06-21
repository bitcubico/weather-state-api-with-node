// https://www.npmjs.com/package/axios
const httpClient = require('axios');
const isEmpty = require('is-empty');

const urlBase = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php';
const headerBase = {
    'X-RapidAPI-Key': 'r6f8FUCLYdmshjSoHsKtiuGidM1hp1xT4EZjsnt41yjs0iFc7D'
}

const SearchPlaceAsync = async(place) => {
    if (isEmpty(place) || place.trim().length == 0)
        throw new Error('Por favor especifique el lugar que desea buscar.')

    let placeEncoded = encodeURI(place);

    const response = await httpClient.get(urlBase, {
        timeout: 2000,
        headers: headerBase,
        params: {
            location: placeEncoded
        }
    });

    return response.data.Results;
}

module.exports = {
    SearchPlaceAsync
}