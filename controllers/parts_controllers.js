const partsService = require('../Service/parts_services')
const partsDAO =require('../DAO/parts')



class PartsController{
    async createParts(req,res){
        try {
                const parts  = await partsService.createParts(req.body.name,req.body.price,req.body.type)
                res.status(201).json({"message":`New Part ${req.body.name} added to parts sucessfully`});
                
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
    
    async deleteParts(req,res){
        try {
            const deleteParts = await partsDAO.deleteParts(req.body.id) 
            res.status(200).json({"message":`This id : ${req.body.id} has been deleted successfully`})
        } catch (error) {
            console.log(error)   
        

        }  
}
}
module.exports = new PartsController()