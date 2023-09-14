
const axios = require('axios');
const { response } = require('express');
//? To Use OpenWeather API You need to have the exact 
//? Latitude and Longitude of Location, This API finds those by name


const TOKEN = process.env.OPENWEATHER_TOKEN

//* This function return geo location based on city name
const findLocationParams = (cityName) => {
  const geoParameterURL = {
    maxBodyLength: Infinity,
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}`,
    headers: { 'appid': TOKEN }
  };
  axios.get(geoParameterURL)
  .then((response)=> {
    return response;
  })
//* this API finds weather info based on geo params

const findWeatherInfo = (lat,lon) => {
  let weatherDetail = {
    maxBodyLength: Infinity,
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${TOKEN}`,
    headers: {}
  }
  axios.get(weatherDetail)
  .then((response) => {
    return response.main.temp
  })
}}

//* This function builds a connection between previous APIs
const weatherDetail = async (cityNmae) => {
  await findLocationParams(cityNmae)
  lat = findLocationParams.lat
  lon = findLocationParams.lon
  findWeatherInfo(lat,lon)
}

module.exports = {weatherDetail}