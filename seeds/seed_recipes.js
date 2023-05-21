/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del();
  await knex('recipes').insert([
    {
      title: 'Chocolate Chip Cookies',
      description: 'Delicious homemade chocolate chip cookies',
      ingredients: '1 cup butter, \n1 cup sugar, \n1 cup brown sugar, \n2 eggs, \n1 tsp vanilla extract, \n2 cups all-purpose flour, \n1 tsp baking soda, \n1/2 tsp salt, \n2 cups chocolate chips',
      instructions: '1. Preheat oven to 375°F. \n2. In a large bowl, cream together the butter, sugar, and brown sugar until smooth. \n3. Beat in the eggs and vanilla extract. \n4. In a separate bowl, combine the flour, baking soda, and salt. Gradually add to the butter mixture and mix well. \n5. Stir in the chocolate chips. \n6. Drop rounded tablespoons of dough onto ungreased baking sheets. \n7. Bake for 8 to 10 minutes, or until golden brown. \n8. Cool on wire racks.',
      prep_time: 15,
      difficulty: 'Easy'
    },
    {
      title: 'Omelette',
      description: 'A classic omelette recipe',
      ingredients: '3 eggs, \nSalt, \nPepper, \nFilling of your choice (e.g., cheese, vegetables, ham)',
      instructions: '1. Crack the eggs into a bowl and whisk them.\n2. Season with salt and pepper.\n3. Heat a non-stick pan over medium heat.\n4. Pour the whisked eggs into the pan.\n5. Cook until the edges start to set.\n6. Add your desired filling onto one half of the omelette.\n7. Fold the other half over the filling.\n8. Cook for a few more minutes until the omelette is cooked through.\n9. Serve hot.',
      prep_time: 10,
      difficulty: 'Easy'
    },
    {
      title: 'Oatmeal',
      description: 'A warm and hearty breakfast option',
      ingredients: '1 cup rolled oats, \n2 cups water, \nPinch of salt, \nToppings of your choice (e.g., fruits, nuts, honey)',
      instructions: '1. In a saucepan, bring water to a boil.\n2. Add the rolled oats and salt to the boiling water.\n3. Reduce heat to low and let it simmer for about 5 minutes, stirring occasionally.\n4. Remove from heat and let it rest for a minute.\n5. Serve hot in bowls.\n6. Add your favorite toppings, such as fruits, nuts, or a drizzle of honey.\n7. Stir and enjoy!',
      prep_time: 10,
      difficulty: 'Easy'
    },
    {
      title: 'Grilled Cheese',
      description: 'A classic and comforting sandwich',
      ingredients: '2 slices of bread, \n2 slices of cheese, \nButter',
      instructions: '1. Heat a skillet or griddle over medium heat.\n2. Butter one side of each slice of bread.\n3. Place one slice of bread, butter-side down, on the skillet.\n4. Add the cheese slices on top of the bread.\n5. Place the other slice of bread, butter-side up, on top of the cheese.\n6. Cook for a few minutes until the bottom slice of bread is golden brown.\n7. Flip the sandwich and cook for a few more minutes until the other side is golden brown and the cheese is melted.\n8. Remove from heat and let it cool for a minute.\n9. Cut the sandwich in half if desired.\n10. Serve hot and enjoy!',
      prep_time: 10,
      difficulty: 'Easy'
    },
    {
      title: 'Bahn Mi',
      description: 'A delicious Vietnamese sandwich',
      ingredients: 'Baguette, \nPork or chicken, \nPickled carrots, \nDaikon, \nCucumber, \nCilantro, \nJalapeno, \nMayonnaise, \nSoy sauce',
      instructions: '1. Slice the baguette in half horizontally.\n2. Toast the baguette in a toaster or oven until lightly crispy.\n3. Cook the pork or chicken until fully cooked and slice it into thin pieces.\n4. Spread mayonnaise on both halves of the baguette.\n5. Layer the sliced pork or chicken on the bottom half of the baguette.\n6. Add pickled carrots and daikon, sliced cucumber, and jalapeno on top of the meat.\n7. Drizzle soy sauce over the ingredients.\n8. Sprinkle fresh cilantro leaves on top.\n9. Press the top half of the baguette onto the sandwich.\n10. Cut the sandwich into smaller pieces if desired.\n11. Serve and enjoy!',
      prep_time: 30,
      difficulty: 'Intermediate'
    },
    {
      title: 'Chicken Noodle Soup',
      description: 'A comforting and classic soup',
      ingredients: 'Chicken broth, \nChicken breast, \nCarrots, \nCelery, \nOnion, \nGarlic, \nEgg noodles, \nSalt, \nPepper, \nFresh herbs (such as parsley or thyme)',
      instructions: '1. In a large pot, heat some oil over medium heat.\n2. Add diced onion, sliced carrots, and sliced celery to the pot. Cook until the vegetables are softened.\n3. Add minced garlic and cook for an additional minute.\n4. Pour in chicken broth and bring it to a boil.\n5. Add chicken breast to the boiling broth and let it cook until fully cooked through.\n6. Remove the chicken breast from the pot and shred it into bite-sized pieces.\n7. Return the shredded chicken to the pot.\n8. Add egg noodles to the pot and cook according to the package instructions.\n9. Season the soup with salt, pepper, and fresh herbs.\n10. Simmer the soup for a few more minutes.\n11. Serve the soup hot and enjoy!',
      prep_time: 45,
      difficulty: 'Easy'
    },
    {
      title: 'Crispy Fried Chicken',
      description: 'Classic southern-style fried chicken',
      ingredients: 'Chicken pieces (such as drumsticks, thighs, or breasts), \nButtermilk, \nAll-purpose flour, \nSalt, \nBlack pepper, \nPaprika, \nGarlic powder, \nOnion powder, \nCayenne pepper, \nVegetable oil',
      instructions: '1. In a large bowl, soak the chicken pieces in buttermilk for at least 1 hour or overnight.\n2. In a separate bowl, mix together flour, salt, black pepper, paprika, garlic powder, onion powder, and cayenne pepper to make the coating.\n3. Heat vegetable oil in a deep frying pan or Dutch oven to 350°F (175°C).\n4. Remove chicken pieces from the buttermilk, allowing excess to drip off.\n5. Coat each chicken piece thoroughly in the flour mixture, pressing the coating onto the chicken.\n6. Carefully place the coated chicken into the hot oil, making sure not to overcrowd the pan.\n7. Fry the chicken for about 15-20 minutes, turning occasionally, until it is golden brown and cooked through.\n8. Transfer the fried chicken to a paper towel-lined plate to drain excess oil.\n9. Let the chicken rest for a few minutes before serving to allow the juices to redistribute.\n10. Serve the crispy fried chicken hot and enjoy!',
      prep_time: 60,
      difficulty: 'Intermediate'
    },
    {
      title: 'Penne alla Vodka',
      description: 'Creamy pasta dish with a touch of vodka',
      ingredients: 'Penne pasta, \nOlive oil, \nGarlic, \nCrushed red pepper \nFlakes, \nVodka, \nTomato sauce, \nHeavy cream, \nParmesan cheese, \nFresh basil leaves',
      instructions: '1. Cook the penne pasta according to package instructions until al dente. Drain and set aside.\n2. In a large skillet, heat olive oil over medium heat. Add minced garlic and crushed red pepper flakes, and sauté until fragrant.\n3. Remove the skillet from heat and carefully add vodka. Return the skillet to heat and simmer until the vodka has reduced by half.\n4. Stir in tomato sauce and bring the mixture to a simmer. Cook for about 10 minutes, allowing the flavors to meld together.\n5. Reduce the heat to low and slowly pour in the heavy cream, stirring continuously. Simmer for another 5 minutes.\n6. Add cooked penne pasta to the skillet and toss to coat the pasta evenly with the sauce.\n7. Remove from heat and sprinkle with grated Parmesan cheese.\n8. Garnish with fresh basil leaves before serving.\n9. Serve the Penne alla Vodka hot and enjoy!',
      prep_time: 30,
      difficulty: 'Easy'
    },
    {
      title: 'Lemon Herb Roasted Chicken',
      description: 'Juicy and flavorful roasted chicken with a citrusy twist',
      ingredients: 'Whole chicken, \nLemon, \nGarlic, \nFresh herbs (such as rosemary, thyme, and parsley), \nOlive oil, \nSalt, \nBlack pepper',
      instructions: '1. Preheat the oven to 425°F (220°C).\n2. Rinse the chicken and pat it dry with paper towels.\n3. In a small bowl, mix together the zest and juice of one lemon, minced garlic, chopped fresh herbs, olive oil, salt, and black pepper to make a marinade.\n4. Rub the marinade all over the chicken, including under the skin and inside the cavity.\n5. Place the chicken on a roasting pan or baking dish, breast side up.\n6. Cut the remaining lemon into wedges and place them inside the cavity of the chicken.\n7. Roast the chicken in the preheated oven for about 1 hour or until the internal temperature reaches 165°F (74°C) when measured with a meat thermometer.\n8. Remove the chicken from the oven and let it rest for a few minutes before carving.\n9. Serve the Lemon Herb Roasted Chicken with your favorite side dishes and enjoy!',
      prep_time: 15,
      difficulty: 'Intermediate'
    },
    {
      title: 'Beef Stir-Fry with Vegetables',
      description: 'Quick and flavorful beef stir-fry loaded with colorful vegetables',
      ingredients: 'Beef (such as flank steak or sirloin), \nSoy sauce, \nCornstarch, \nSesame oil, \nGarlic, \nGinger, \nBell peppers, \nBroccoli, \nCarrots, \nSnap peas, \nGreen onions, \nVegetable oil',
      instructions: "1. In a bowl, marinate thinly sliced beef with soy sauce, cornstarch, and a dash of sesame oil. Let it sit for about 10-15 minutes.\n2. Heat vegetable oil in a wok or large skillet over high heat.\n3. Add minced garlic and grated ginger to the hot oil and stir-fry for a few seconds until fragrant.\n4. Add the marinated beef to the wok and stir-fry until it's browned and cooked to your desired level of doneness. Remove the beef from the wok and set it aside.\n5. In the same wok, stir-fry sliced bell peppers, broccoli florets, julienned carrots, and snap peas until they're crisp-tender.\n6. Return the cooked beef to the wok and toss it with the vegetables.\n7. Add a splash of soy sauce for extra flavor, if desired.\n8. Garnish with sliced green onions and serve the Beef Stir-Fry with Vegetables over steamed rice or noodles.",
      prep_time: 30,
      difficulty: 'Easy'
    }
  ]);
};
