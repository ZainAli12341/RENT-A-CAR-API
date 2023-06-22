const db =require('../db/db')



    class CARDAO {
      
        async createCars(name,manufactured_year,price_per_day,availability_status){
        const [cars] =await db('cars').insert({
            name,
            manufactured_year,
            price_per_day,
            availability_status
    })
        .returning('cars');
         return cars 

    }
    async getCars(){
       try
    { const allCars = await db.select('*').from('cars');
      return allCars
    }catch(error){
        console.log(error)
    }
        
    }
    
async deleteCars(id){
    const deleteCars =  await  db('cars').where({id:id}).del();
    return deleteCars
}

  
}

module.exports = new CARDAO();