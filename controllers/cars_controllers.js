const carService =  require('../Service/cars_services')
const carDAO =require('../DAO/cars')

class CarController{
    async createCars(req,res){
        try {
                const cars  = await carService.createCars(req.body.name,req.body.manufactured_year,req.body.price_per_day,req.body.availability_status)
                res.status(201).json({"CAR ADDED":cars});
                
            } catch (error) {
                console.log(error)
            }

    } 
    async getCars(req,res){
        try {
            const getAllCars = await carDAO.getCars() 
            res.status(200).json({"Cars":getAllCars})
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CarController()