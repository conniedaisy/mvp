var express = require('express');
var mongoose = require('mongoose');

// middleware
// var morgan = require('morgan');
// var bodyParser = require('body-parser');

var movieController = require('./movies/movieController.js');

var app = express();

// connect to mongo database named "watchful"
mongoose.connect('mongodb://localhost/watchful');

// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
// require('./config/routes.js')(app, express);

// middleware
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../../client'));

app.use(express.static(__dirname + '/../client'));

app.get('/', function(request, response) {
  // response.send('hello world');
  response.render('index.html');
});

// get all movies for user from database
app.get('/api/mymovies', movieController.getAllMovies);

app.post('/api/mymovies', movieController.addMovie);



// start listening to requests on port 3000
console.log('watchful is listening on port 3000');
app.listen(3000);

// export our app for testing and flexibility, required by index.js
// module.exports = app;
