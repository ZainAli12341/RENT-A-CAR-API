const carDAO =require('../DAO/cars');


class CARSERVICE{

    createCars(name,manufactured_year,price_per_day,availability_status){
     carDAO.createCars(name,manufactured_year,price_per_day,availability_status)   
    }
    
} 

module.exports= new CARSERVICE();