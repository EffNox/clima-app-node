const axios = require('axios');
const getLugarLatLng = async (dir) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(dir)}`,
        headers: { 'x-rapidapi-key': '763f79a821msh7fb2036f1aa1fc4p102ec9jsn164cdbbd4db4' }
    });

    const rsp = await instance.get();
    if (rsp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = rsp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}


