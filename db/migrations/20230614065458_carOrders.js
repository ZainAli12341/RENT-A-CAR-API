const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
      return knex.schema.createTable('orders',table=>{
         table.increments('id').primary()
         table.integer('list_customers_id').references('id').inTable('customers');
         table.integer('booked_car_id').references('id').inTable('cars');
         table.integer('days');
   })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
      return  knex.schema.dropTable('orders')
};

