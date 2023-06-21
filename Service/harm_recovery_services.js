
const recoveryDAO=require('../DAO/harmRecovery')


class RECOVERYSERVICES{
 createRecovery(parts_id,redListed_customers_id,disabled_car_id,status){
    recoveryDAO.createRecovery(parts_id,redListed_customers_id,disabled_car_id,status)
 }   
}




module.exports = new RECOVERYSERVICES()