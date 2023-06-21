/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return  knex.schema.createTable('customers',table => {
          table.increments('id').primary({constraintName:'customers_id_primary_key'});
          table.string('name');
          table.string('adress');
          table.string('cnic');

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('customers')
};
