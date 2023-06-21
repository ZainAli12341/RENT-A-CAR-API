const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('parts',table=>{
           table.increments('id').primary({constraintName:'parts_id_primary_key'});
           table.string('name');
           table.integer('price').notNullable();
})};




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return  knex.schema.dropTable('parts');
};

