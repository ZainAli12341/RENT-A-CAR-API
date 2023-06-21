const recoveryService=require('../Service/harm_recovery_services')
const recoveryDAO=require('../DAO/harmRecovery')


class RecoveryController{
    async createRecoveries(req,res){
        try {
                const recovery  = await recoveryService.createRecovery(req.body.parts_id,req.body.redListed_customers_id,req.body.disabled_car_id,req.body.status)
                res.status(201).json({"RECOVERY ENTERED SUCESSFULLY":recovery});
                
            } catch (error) {
                console.log(error)
            }

    }
    async getRecoveries(req,res){
        try {
                const getAllRecoveries = await recoveryDAO.getRecoveries() 
                res.status(200).json({"ALL-RECOVERIES":getAllRecoveries})
        } catch (error) {
            console.log(error)

        }
    } 
    async updateRecoveries(req,res){
        try {
            const updateRecovery = await recoveryDAO.updateRecoveries(req.body.id,req.body.status) 
            res.status(200).json({"Your id has been updated successfully":updateRecovery})
        } catch (error) {
            console.log(error)

        }
    }
    async viewTogether(req,res){
        try {
         const viewjoinedTable = await recoveryDAO.joins()
         res.status(200).json({"TABLE":viewjoinedTable})
          
        } catch (error) {
         console.log(error)
        } 
    }

}
module.exports = new RecoveryController()