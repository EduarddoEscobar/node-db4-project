
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128)
            .notNullable()
            .unique();
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number')
            .unsigned()
            .notNullable();
        tbl.string('instructions', 128)
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient_name', 128)
            .notNullable()
            .unique();
    })
    .createTable('step_ingredients', tbl => {
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.decimal('quantity')
            .notNullable();
        tbl.primary(['step_id', 'ingredient_id']);
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes');
};
