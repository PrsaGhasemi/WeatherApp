const {Router} = require('express');

const router = new Router()

const {weatherController} = require('../Controllers/controller');


router.get("/:cityName", weatherController)


module.exports = router