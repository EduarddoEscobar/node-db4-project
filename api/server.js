const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const recipesRouter = require('./recipes/recipe-router');
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/api/recipes', recipesRouter);

module.exports = app;
