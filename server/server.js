var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "watchful"
mongoose.connect('mongodb://localhost/watchful');

// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
// require('./config/routes.js')(app, express);

app.use(express.static(__dirname + '/../client'));

app.get('/', function(request, response) {
  // response.send('hello world');
  response.render('index.html');
});

app.get('/mymovies', function(request, response) {

});

app.get('/search', function(request, response) {

});


// start listening to requests on port 3000
console.log('watchful is listening on port 3000');
app.listen(3000);

// export our app for testing and flexibility, required by index.js
// module.exports = app;
