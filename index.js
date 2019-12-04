/**
 * Simple web server based on 
 * http://expressjs.com/en/starter/hello-world.html
 *
 * Prerequisites:
 *  - Node
 *  - Express (npm install express)
 * 
 * To use, save as a file (e.g. index.js) and run with:
 *  node index.js /PATH/TO/WWW/
 */
 
// Parameters
// var sitePath = process.argv[2] || ".";
var port = process.env.PORT;

// Libraries
var express = require('express');
var app = express();

// Request logging
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});
// app.use(express.static('game'))

// Start server
// console.log(sitePath);
console.log("Starting server in: " + __dirname + '/' );
app.use(express.static(__dirname + '/game'));

app.listen(port, function() { 
    console.log("Server running at: http://localhost:" + port)
});