const Movie = require("../models/movie");

function handleError(res, err) {
    res.status(500).json(err);
  }

const getMovies = (req, res) => {
  Movie.find()
    .sort({ title: 1 })
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((err) => handleError(res, err));
};

const getMovieById = (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((err) => handleError(res, err));
};

const deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((err) => handleError(res, err));
};

const postMovie = (req, res) => {
  const movie = new Movie(req.body);
  movie
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

const updateMovie = (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getMovies,
  getMovieById,
  deleteMovie,
  postMovie,
  updateMovie,
};
