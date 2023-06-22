const db = require ('../db/db');

class RECOVERYDAO{
    async createRecovery(parts_id,redListed_customers_id,disabled_car_id,status){
        const [recovery] =await db('recovery').insert({
            parts_id,
            redListed_customers_id,
            disabled_car_id,
            status



        }).returning('recovery')
        return recovery
    }
    async getRecoveries(){
     try{
        const recovery = await db.select('*').from('recovery');
        return recovery
     } 
     catch(error){
        console.log(error)
     }
    }
    async updateRecoveries(id,status){
      try {
        const updation = await db('recovery').where({id:id}).update({status:status});
        return updation
    
      } catch (error) {
        console.log(error)        
      }  
    
    }
    async joins(){
      try {
          const join = await db.select('recovery.id','parts.name' ,'recovery.redListed_customers_id',{customer_name:'customers.name'}, 'recovery.disabled_car_id',{ cars_name:'cars.name'},'recovery.status')
          .from('recovery')
          .join('customers', { 'customers.id': 'recovery.redListed_customers_id' })
          .join('cars', { 'cars.id': 'recovery.disabled_car_id' })
          .join('parts',{'parts.id':'recovery.parts_id',});
        
          return join;
        
      } catch (error) {
          console.log(error)
      }
  
  }
  async deleteRecovery(id){
    const deleteRecovery =  await  db('recovery').where({id:id}).del();
    return deleteRecovery
}

}

module.exports = new RECOVERYDAO();
