const ORDERSDAO =require('../DAO/orders');


class ORDERSERVICES{
    createOrders(list_customers_id,booked_car_id,days){
        ORDERSDAO.createOrders(list_customers_id,booked_car_id,days)
    }
}



module.exports = new ORDERSERVICES()