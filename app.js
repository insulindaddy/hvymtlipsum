// Require express and create an express application instance
const express = require('express');
const app = express();

var server = require('http').createServer(app);
//var io = io.listen(server);  not sure why this isn't needed

// Require the express routes defined in router.js
const routes = require('./router');

// Define the hostname and port where the server can be found
const hostname = "127.0.0.1";
const port = 3000;

app.get('/', function(req, res) {
     res.sendFile('./public/index.html');
});

// var server = require('http').createServer(app)
// var io = io.listen(server);
//
// app.get('/', function(req, res) {
//   res.sendfile('./public/index.html');
// });
//
// server.listen(80);
/// Probably need to use higher port (3000)^^


// Define the directory where static files are found
app.use(express.static('public'));

// Specify the routes to be used for our application
app.use(routes);

// not sure about this
server.listen(port, () => {
  console.log(`Server is listening at http://${hostname}:${port}/`);
  })

// Begin accepting connections to the specified port
//app.listen(port, () => {
  // Display server location information to the console
//  console.log(`Server is listening at http://${hostname}:${port}/`);
//})
