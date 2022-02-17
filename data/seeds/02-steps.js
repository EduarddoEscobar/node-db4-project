
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {step_number: 1, instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},
    {step_number: 2, instructions: 'Add 1 tbsp olive oil', recipe_id: 1},
    {step_number: 1, instructions: 'Warm up cream cheese', recipe_id: 2},
    {step_number: 1, instructions: 'Put cheese in between bread', recipe_id: 3}
  ]);
};
