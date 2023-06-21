const ordersService = require('../Service/orders_services')
const ordersDAO =require('../DAO/orders')

class OrdersController{
    async createOrders(req,res){
        try {
                const orders  = await ordersService.createOrders(req.body.list_customers_id,req.body.booked_car_id,req.body.days)
                res.status(201).json({"ORDER PLACED SUCCESSFULLY":orders});
                
            } catch (error) {
                console.log(error)
            }
        
    }
    async getOrders(req,res){
        try {
              
            res.status(200).json({"Orders":await ordersDAO.getOrders()})
        } catch (error) {
            console.log(error)
        }


    }
    async viewTogether(req,res){
       try {
        const viewjoinedTable = await ordersDAO.joins()
        res.status(200).json({"TABLE":viewjoinedTable})
         
       } catch (error) {
        console.log(error)
       } 
      
        

    }
}
module.exports = new  OrdersController();