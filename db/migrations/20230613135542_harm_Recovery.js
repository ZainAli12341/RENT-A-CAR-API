/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.createTable('recovery',table =>{
        table.increments('id').primary()
        table.integer('parts_id').references('id').inTable('parts').onDelete('CASCADE');
        table.integer('redListed_customers_id').references('id').inTable('customers').onDelete('CASCADE');
        table.integer('disabled_car_id').references('id').inTable('cars').onDelete('CASCADE');
        table.string('status').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
return    knex.schema.dropTable('recovery')
};
