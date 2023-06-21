const customersDAO =require('../DAO/customers');



class CUSTOMERSSERVICE{
    createCustomer(name,adress,cnic){
        customersDAO.createCustomers(name,adress,cnic)
    }
}


module.exports = new CUSTOMERSSERVICE()