const express = require('express')
const router = express.Router()
const carController=require('../controllers/cars_controllers')

router.get('/cars',carController.getCars)
router.post('/cars',carController.createCars)


module.exports=router;








