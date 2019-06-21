// https://www.npmjs.com/package/axios
const httpClient = require('axios');

const urlBase = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php';
const headerBase = {
    'X-RapidAPI-Key': 'r6f8FUCLYdmshjSoHsKtiuGidM1hp1xT4EZjsnt41yjs0iFc7D';
}

const SearchPlace = (place) => {
    const instance = httpClient.get({
        baseUrl: urlBase,
        timeout: 2000,
        headers: headerBase,
        params: {
            location: 'New+York'
        }
    })

    instance.get()
}