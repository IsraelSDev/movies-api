const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const movies = require("./src/movies/movies.json");

const moviesFiltered = (name) => {
  movies.filter((movie) => {
    return movie.name.toLowerCase().includes(name.toLowerCase());
  });
};

app.get("/movies", (req, res) => {
  return res.json(movies);
});

app.get("/movies/:name", (req, res) => {
  return res.json(moviesFiltered(req.params.name));
});

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
