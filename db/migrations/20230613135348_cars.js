/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return   knex.schema.createTable('cars',table=>{
            table.increments('id').primary();
            table.string('name').notNullable();
            table.integer('manufactured_year').notNullable();
            table.integer('price_per_day').notNullable();
            table.string('availability_status').notNullable();
         


    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return  knex.schema.dropTable('cars')

};
