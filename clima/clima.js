const axios = require('axios');
const getClima = async (lat, lng) => {
    const rsp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=null&units=metric`);
    return rsp.data.main.temp;
}
module.exports = {
    getClima
}
