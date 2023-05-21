const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new recipe
router.post('/', async (req, res) => {
  try {
    const { title, image_url, description, ingredients, instructions, prep_time, difficulty } = req.body;
    const newRecipe = await db('recipes').insert({
      title,
      image_url,
      description,
      ingredients,
      instructions,
      prep_time,
      difficulty
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create recipe' });
  }
});

// Read all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await db('recipes').select('*');
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch recipes' });
  }
});

// Read a single recipe
router.get('/:id', async (req, res) => {
  try {
    const recipe = await db('recipes').where('id', req.params.id).first();
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
  try {
    const { title, description, ingredients, instructions, prep_time, difficulty } = req.body;
    const updatedRecipe = await db('recipes').where('id', req.params.id).update({
      title,
      description,
      ingredients,
      instructions,
      prep_time,
      difficulty
    });
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
  try {
    const deletedRecipe = await db('recipes').where('id', req.params.id).del();
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
