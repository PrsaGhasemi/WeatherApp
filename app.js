const express = require('express');
require('dotenv').config()
const app = express()

app.use(express.json())


app.get("/salam" , (req,res) => {
    console.log("kose nanashon");
    res.send(200)
})

app.get("/weather" , (req,res) => {

})

app.listen(3000, () => {
    console.log(`You are connected to port 3000`);
})