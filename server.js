const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require('./routes/movie-routes.js')

const PORT = 3001;
const MONGO_URL = "mongodb+srv://shumelvalera25:123@learning.nlvzl.mongodb.net/learning";

const app = express();
app.use(express.json()); //нужно для того чтобы вытянут данные из запроса
app.use(movieRoutes)

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("DB connection error: ", err));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("listening port: ", PORT);
});

