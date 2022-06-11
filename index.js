const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const movies = require("./src/movies/movies.json");

app.get("/movies", (req, res) => {
  return res.json(movies);
});

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
