const express = require('express');
require('dotenv').config("./src/.env")
const app = express()

const routes = require('./src/Routes/weatherRoutes');
//* MiddleWares
app.use(express.json())


app.use("/weather" , routes)


PORT = process.env.PORT
app.listen(PORT || 5000, () => {
    console.log(`You are connected to port ${PORT}`);
})