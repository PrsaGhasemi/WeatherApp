
const {weatherAPI} = require('../Services/geoServices');

exports.weatherController = async (req,res) => {
 cityName = req.body
 res.status(200).json({message: "weather info received successfuly"})
 try {
    await weatherAPI(cityName)
 } catch (error) {
    res.status(400).json({message: `${error}`})
 }
}