/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('items', table => {
        table.increments();
        table.integer('userid');
        table.string('itemname', 250);
        table.string('description', 1250);
        table.integer('quantity');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('items');
};
