
const db =require('../db/db')

class PARTSDAO{

async createParts(name,price,type){
    const [parts] = await db('parts').insert({
            name,
            price,
            type
    }).returning('parts')
    return parts
}
async getParts(){
try {
    const  parts = await db.select('*').from('parts')
    return parts  
} catch (error) {
    console.log(error)
}
}

async deleteParts(id){
    const deleteParts =  await  db('parts').where({id:id}).del();
    return deleteParts
}


}

module.exports = new PARTSDAO ();