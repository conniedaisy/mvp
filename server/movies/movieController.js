var Q = require('q');
var Movie = require('./movieModel.js');

// Promisify mongoose model methods with the `q` promise library
var findMovie = Q.bind(Movie.findOne, Movie); // Same as Model.find, but only receives a single document as second parameter
var findAllMovies = Q.nbind(Movie.find, Movie); // Model.find(query, fields, options, callback), callback = function(err, docs) {}; docs is an array
var createMovie = Q.bind(Movie.create, Movie); 


module.exports = {

  // for app.get('/mymovies')
  // respond with all movies
  allMovies: function(request, response, next) {
    findAllMovies({}) // returns all movies in an array
    .then(function(movies) {
      response.json(movies);
    })
    .fail(function(err) {
      next(error);
    });
  },

  // for app.post('/search')
  // if movie exists in database, respond with movie info
  // else, add movie to database
  newMovie: function(request, response, next) {

  },

  // newLink: function (req, res, next) {
  //   var url = req.body.url;
  //   if (!util.isValidUrl(url)) {
  //     return next(new Error('Not a valid url'));
  //   }

  //   findLink({url: url})
  //     .then(function (match) {
  //       if (match) {
  //         res.send(match);
  //       } else {
  //         return util.getUrlTitle(url);
  //       }
  //     })
  //     .then(function (title) {
  //       if (title) {
  //         var newLink = {
  //           url: url,
  //           visits: 0,
  //           baseUrl: req.headers.origin,
  //           title: title
  //         };
  //         return createLink(newLink);
  //       }
  //     })
  //     .then(function (createdLink) {
  //       if (createdLink) {
  //         res.json(createdLink);
  //       }
  //     })
  //     .fail(function (error) {
  //       next(error);
  //     });
  // },

};