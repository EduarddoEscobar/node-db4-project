
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Spaghetti Bolognese'},
    {recipe_name: 'Cheesecake'},
    {recipe_name: 'Grilled Cheese'}
  ]);
};
