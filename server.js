const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5500
const errorHandler = require('./middleware/errorHandler.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);


const recipesRoutes = require('./routes/recipes');
app.use('/recipes', recipesRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
