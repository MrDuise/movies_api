/**
 * This file is all the controllers for the routes
 * Each controller function calls the method from the MovieDAO file that goes along with its function
 */


const { Movie } = require("../lib/app/models/Movie.js");
const { MovieDAO } = require("../lib/app/database/MovieDAO.js");

// Database configuration
const dbHost = "localhost";
const dbPort = 3306;
const dbUsername = "root";
const dbPassword = "root";



/**
 * Controller for getting all the movies from the database
 *
 * @param {*} req
 * @param {*} res
 */
const getAllMovies = (req, res) => {
  console.log(req.body);
  //return Users list as JSON, call MusicDAO.findArtists(), and return JSON array of artists (a string)
  console.log("In GET /api/v1/movies Route");
  let dao = new MovieDAO(dbHost, dbPort, dbUsername, dbPassword);
  dao.findAllMovies(function (movies) {
    res.json(movies);
  });
};

/**
 * Controller for adding a movie to the database
 *
 * @param {*} req
 * @param {*} res
 */
const createMovie = (req, res) => {
  console.log(req.body);

  // If invalid POST Body then return 400 response else add Movie to the database
  console.log(
    "In POST /api/v1/movies Route with Post of " + JSON.stringify(req.body)
  );
  if (!req.body.title) {
    // Check for valid POST Body, note this should validate EVERY field of the POST
    res.status(400).json({ error: "Invalid Movie Posted" });
  } else {
    // Create an Movie object model from Posted Data
    let movie = new Movie(
      req.body.id,
      req.body.title,
      req.body.genre,
      req.body.price,
      req.body.quantity
    );

    // Call MusicDAO.create() to create an Movie from Posted Data and return an OK response
    let dao = new MovieDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.create(movie, function (movieId) {
      if (movieId == -1)
        res.status(200).json({ error: "Creating Movie failed" });
      else
        res.status(200).json({
          success: "Creating Movie passed with an Movie ID of " + movieId,
        });
    });
  }
};

const getMovie = (req, res) => {
  console.log(req.body);
  //return Users list as JSON, call MusicDAO.findArtists(), and return JSON array of artists (a string)
  console.log("In GET /api/v1/movies Route");
  let movieId = Number(req.params.id);
  let dao = new MovieDAO(dbHost, dbPort, dbUsername, dbPassword);
  dao.findSingleMovie(movieId, function (movie) {
    if (movie == null) res.status(200).json({ error: "Invalid Movie ID" });
    else res.status(200).json(movie);
  });
};

const updateMovie = (req, res) => {
  console.log(req.body);

  // If invalid POST Body then return 400 response else add Movie to the database
  console.log(
    "In POST /api/v1/movies Route with Post of " + JSON.stringify(req.body)
  );
  if (!req.body.title) {
    // Check for valid POST Body, note this should validate EVERY field of the POST
    res.status(400).json({ error: "Invalid Movie Posted" });
  } else {
    // Create an Movie object model from Posted Data
    let movie = new Movie(
      req.body.id,
      req.body.title,
      req.body.genre,
      req.body.price,
      req.body.quantity
    );

    // Call MusicDAO.create() to create an Movie from Posted Data and return an OK response
    let dao = new MovieDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.update(movie, function (changes) {
      if (changes == 0)
        res
          .status(200)
          .json({ error: "Updating Movie passed but nothing was changed" });
      else
        res
          .status(200)
          .json({ success: "Updating Movie passed and data was changed" });
    });
  }
};

const deleteMovie = (req, res) => {
  // Get the movie
  console.log("In DELETE /movies Route with ID of " + req.params.id);
  let movieId = Number(req.params.id);

  // Call MusicDAO.delete() to delete an Movie from the database and return if passed
  let dao = new MovieDAO(dbHost, dbPort, dbUsername, dbPassword);
  dao.delete(movieId, function (changes) {
    if (changes == 0) res.status(200).json({ error: "Delete Movie failed" });
    else res.status(200).json({ success: "Delete Movie passed" });
  });
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
