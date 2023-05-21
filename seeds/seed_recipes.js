/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Recipes').del();
  await knex('Recipes').insert([
    {
      title: 'Recipe 1',
      description: 'Description of Recipe 1',
      ingredients: 'Ingredients of Recipe 1',
      instructions: 'Instructions of Recipe 1',
      prep_time: 30,
      difficulty: 'Easy'
    },
    {
      title: 'Recipe 2',
      description: 'Description of Recipe 2',
      ingredients: 'Ingredients of Recipe 2',
      instructions: 'Instructions of Recipe 2',
      prep_time: 45,
      difficulty: 'Medium'
    },
    {
      title: 'Recipe 3',
      description: 'Description of Recipe 3',
      ingredients: 'Ingredients of Recipe 3',
      instructions: 'Instructions of Recipe 3',
      prep_time: 60,
      difficulty: 'Hard'
    }
    // Add more seed data as needed
  ]);
};
