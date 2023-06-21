const partsService = require('../Service/parts_services')
const partsDAO =require('../DAO/parts')



class PartsController{
    async createParts(req,res){
        try {
                const parts  = await partsService.createParts(req.body.name,req.body.price,req.body.type)
                res.status(201).json({"PARTS ADDED SUCCESSFULLY":parts});
                
            } catch (error) {
                console.log(error)
            }

    }
    async getParts(req,res){
        try {
                const getAllparts = await partsDAO.getParts() 
                res.status(200).json({"PARTS":getAllparts})
                
        } catch (error) {
            console.log(error)
        }
    } 
}

module.exports = new PartsController()