
const axios = require('axios');
//? To Use OpenWeather API You need to have the exact 
//? Latitude and Longitude of Location, This API finds those by name

exports.findLocationByName = (req,res) => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${req.body}&appid=${process.env.OPENWEATHER_TOKEN}`,
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  })
}