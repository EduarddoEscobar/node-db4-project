
exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    {step_number: 2, ingredient_id: 1, quantity: 0.014},
    {step_number: 3, ingredient_id: 2, quantity: 1},
    {step_number: 4, ingredient_id: 3, quantity: 1},
    {step_number: 4, ingredient_id: 4, quantity: 2}
  ]);
};
