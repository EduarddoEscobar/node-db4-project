
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'olive oil'},
    {ingredient_name: 'cream cheese'},
    {ingredient_name: 'slice of cheese'},
    {ingredient_name: 'slice of bread'}
  ]);
};
