const {Router} = require('express');
const router = Router();
const Recipes = require('./recipe-model');

router.get('/:id', async (req, res) => {
    let result = await Recipes.getRecipeById(req.params.id);
    if(result){
        res.status(200).json({result});
    }else{
        res.status(404).json({message: `recipe with the id ${req.params.id} not found`});
    }
})

module.exports = router;