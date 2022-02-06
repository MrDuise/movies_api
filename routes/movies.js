/**
 * Routes file
 * This file details the routes that will be used in the API as well as what HTTP requests will be used at each route
 * Each request calls a different function that is imported from the movies.js file in the controllers folder
 */
    

const express = require('express');
const router = express.Router();

const { getAllMovies, createMovie, getMovie, updateMovie, deleteMovie } = require('../controllers/movies');

router.route('/').get(getAllMovies).post(createMovie)
router.route('/:id').get(getMovie).patch(updateMovie).delete(deleteMovie)


module.exports = router