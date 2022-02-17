
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128).notNullable();
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number').notNullable();
        tbl.string('instructions', 128).notNullable();
    })
    .createTable('step_ingredients', tbl => {
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('step')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.decimal('quantity').notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient_name', 128).notNullable().unique();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes');
};
