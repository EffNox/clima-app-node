const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcciòn de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (direccion) => {

    try {
        const coords = await getLugarLatLng(direccion);
        const weather = await getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${weather}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.d)
    .then(console.log)
    .catch(console.log);
