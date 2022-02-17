const db = require('../../data/db-config');

async function getRecipeById(id) {
    let recipe = await db('recipes')
        .where('recipe_id', id)
        .first();

    let steps = await db('steps as st')
        .select('st.step_id', 'st.step_number', 'st.instructions')
        .where('recipe_id', id)

    let ingredients = await db('step_ingredients as st')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'st.ingredient_id')
        .select('i.ingredient_id', 'i.ingredient_name', 'st.quantity', "st.step_id")
        .whereIn('st.step_id', steps.map(step => step.step_id));
    steps = steps.map(step => {
        let newStep = {...step, ingredients: []};
        ingredients.forEach(ingredient => {
            if(ingredient.step_id === step.step_id) {
                newStep = {...newStep, ingredients: [...newStep.ingredients, {
                    ingredient_id: ingredient.ingredient_id,
                    ingredient_name: ingredient.ingredient_name,
                    quantity: ingredient.quantity
                }]};
            }
        })
        return newStep;
    });
    let result = {
        ...recipe,
        steps
    }
    return result;
}

module.exports = {
    getRecipeById,
}