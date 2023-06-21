const db = require('../db/db')


class ORDERSDAO  {

async createOrders(list_customers_id,booked_car_id,days){
    const [orders] = await db('orders').insert({
        list_customers_id,
        booked_car_id,
        days

    }).returning('orders')
    return orders   
    }
async getOrders(){
    try {
        const  orders = await db.select('*').from('orders')
        return orders
        
    } catch (error) {
         console.log(error)
    }
    }
async joins(){
    try {
        const join = await db.select('orders.id', 'orders.list_customers_id',{customer:'customers.name'}, 'orders.booked_car_id',{ cars_name:'cars.name'}, 'cars.price_per_day', 'orders.days')
        .from('orders')
        .join('customers', { 'customers.id': 'orders.list_customers_id' })
        .join('cars', { 'cars.id': 'orders.booked_car_id' });
      
      return join;
      
    } catch (error) {
        console.log(error)
    }

}
}
module.exports = new ORDERSDAO ();