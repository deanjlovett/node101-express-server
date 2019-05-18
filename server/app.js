// import files and packages up here
const data_json = require("./data.json");
const express = require("express");

const morgan = require("morgan");

var path = require('path');

// create your express server below
var app = express();

// add your routes and middleware below

/** 
 *  You'll be using morgan to log each request to the console (on the server side).
 * 
 * Exit Criterion:
 * 3. Server should log each request using morgan's dev format
 *
 */
app.use(morgan('dev'));

/**
 * You will build a web server that will respond to requests for http://localhost:3000/ and return our application's resources.
 * 
 * Exit Criterion:
 * 2. Server should respond with a status code of 200
 *  
 */
app.get('/', (req, res) => {
    res.send(
        "       To be a web server\nor not to be a web server\nThat is the question.");
});

/** 
 *  The web server should also respond to GET requests at http://localhost:3000/data with all the data from data.json.
 * 
 * Exit Criterion:
 * 1. Server should respond to GET requests to / route the top spots page
 * 
 */
app.get('/data', (req, res) => {
    res.json(data_json);
});



// finally export the express application
module.exports = app;
