const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const errorHandler = require('./middleware/errorHandler')
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

const recipesRoutes = require('./routes/recipes');
app.use('/recipes', recipesRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});
