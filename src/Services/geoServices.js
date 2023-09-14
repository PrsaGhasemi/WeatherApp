const {weatherDetail} = require('../Repositories/geoRepository');


exports.weatherAPI = (cityName) => {
    return weatherDetail(cityName)
}