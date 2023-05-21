/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('recipes', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description');
      table.text('ingredients');
      table.text('instructions');
      table.integer('prep_time');
      table.string('difficulty');
      // Add any additional fields or constraints as needed
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('recipes');
  };
  