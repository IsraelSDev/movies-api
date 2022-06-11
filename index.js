const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const movies = require("./src/movies/movies.json");

app.use(cors());

app.get("/movies", (req, res) => {
  return res.json(movies);
});

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
