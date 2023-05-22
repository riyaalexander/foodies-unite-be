const express = require('express');
const router = express();
const db= require('../db/db-config')

// Create a new recipe
router.post('/', async (req, res) => { 
  const {id} = req.params
   const { title, image_url, description, ingredients, instructions, prep_time, difficulty } = req.body;

try {
    const newRecipe = await db.one("INSERT INTO recipes (title, image_url, description, ingredients, instructions, prep_time ,difficulty) VALUES($1, $2, $3, $4, $5,$6,$7) RETURNING *",[title,image_url,description,ingredients,instructions,prep_time,difficulty]);
    res.status(201).json({ id, ...newRecipe });
  
  } catch (error) {
    res.status(500).json({ error: 'Unable to create recipe' });
  }
});

// Read all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await db.any('SELECT * FROM recipes');
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch recipes' });
  }
});

/// Read a single recipe
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const recipe = await db.one("SELECT * FROM recipes WHERE id=$1", id)
    if (!recipe) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
        res.json(recipe);
       
      }
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch recipe' });
    }
  });
  
  

// Update a recipe
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const { title, image_url, description, ingredients, instructions, prep_time, difficulty } = req.body;

  try {
    const updatedRecipe = await db.one("UPDATE recipes SET title=$1,image_url=$2, description=$3, ingredients=$4, instructions=$5, prep_time=$6, difficulty=$7 WHERE id=$8 RETURNING *",
    [title,image_url,description,ingredients,instructions,prep_time,difficulty,id])
  
    res.json(updatedRecipe)
    if (updatedRecipe === 0) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.json({ message: 'Recipe updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to update recipe' });
  }
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  // res.json('deleted')
  try {
    const deletedRecipe = await db.one("DELETE FROM recipes WHERE id=$1 RETURNING *", id)
    if (deletedRecipe === 0) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.json({ message: 'Recipe deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete recipe' });
  }
});

module.exports = router;