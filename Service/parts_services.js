
const partsDAO=require('../DAO/parts')


class PARTSSERVICE{
 createParts(name,price,type){
    partsDAO.createParts(name,price,type)
 }   
}



module.exports = new PARTSSERVICE()