const db = require('../db/db');


class CUSTOMERSDAO {
    async createCustomers(name,adress,cnic){
        const [customers] =await db('customers').insert({
                name,
                adress,
                cnic
    })
        .returning('customers');
         return customers
   
    }
    async getCustomers(){
    try {
        const getAllCustomers = await db.select('*').from('customers');
        return getAllCustomers
    } catch (error) {
        console.log(error)
    }    
    }
    async deleteCustomers(id){
        const deleteCustomers =  await  db('customers').where({id:id}).del();
        return deleteCustomers
    }

}

module.exports = new  CUSTOMERSDAO();