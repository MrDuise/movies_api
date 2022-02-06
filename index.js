/**
 * Main entry point of API
 * Defines the default route, and calls the movieRoutes file
 * Starts the server
 */

const bodyParser = require("body-parser");
const movieRoutes = require('./routes/movies')

// Create instance of an Express Application on Port 3000
const express = require("express");
const app = express();
const port = 5000;

app.use(bodyParser.json());

//Default route being used
app.use('/api/v1/movies', movieRoutes)




// Start the Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
