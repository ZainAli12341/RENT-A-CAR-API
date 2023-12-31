const customersService=require('../Service/customers_services')
const customersDAO=require('../DAO/customers');


class CustomersController{
    async createCustomers(req,res){
        try {
                const customers  = await customersService.createCustomer(req.body.name,req.body.adress,req.body.cnic)
                res.status(201).json({"message":`Customer Succefully posted With this Name ${req.body.name}`});
                
            } catch (error) {
                console.log(error)
            }

    }
    async getCustomers(req,res){
        try {
            const allCustomers = await customersDAO.getCustomers()
                       res.status(200).json({"ALL-CUSTOMERS":allCustomers})
        } catch (error) {
            console.log(error)

        }
    } 
    async DeleteCustomers(req,res){
        try {
            const delCustomer = await customersDAO.deleteCustomers(req.body.id) 
            res.status(200).json({})
        } catch (error) {
            console.log(error)

        }
    }

}


module.exports = new CustomersController();