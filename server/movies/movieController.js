// var Q = require('q');
var Movie = require('./movieModel.js');
var helpers = require('../helpers.js');

// Promisify mongoose model methods with the `q` promise library
// var findMovie = Q.nbind(Movie.findOne, Movie); // Same as Model.find, but only receives a single document as second parameter
// var findAllMovies = Q.nbind(Movie.find, Movie); // Model.find(query, fields, options, callback), callback = function(err, docs) {}; docs is an array
// var createMovie = Q.nbind(Movie.create, Movie); 

module.exports = {

  // for app.get('/api/mymovies')
  // get all movies from MongoDB
  getAllMovies: function(request, response, next) {
    Movie.find({}, function(error, success) {
      if (error) {
        response.send(error);
      } else {
        // console.log('all movies: ', success);
        response.send(success);
      }
    });
  },

  // for app.post('/api/mymovies')
  // user clicks on a movie from search
  // if movie exists in database, respond with movie info
  // else, add movie to database
  addMovie: function(request, response, next) {
    helpers.collectData(request, function(data) {
      var data = JSON.parse(data);
      Movie.find({id: data.id}, function(error, found) {
        if (error) {
          console.log(error);
        }
        if (found.length > 0) {
          console.log('found: ', found);
          response.send(found)
        } else {
          console.log('movie doesnt exists');
          var newMovie = {
            id: data.id,
            title: data.title,
            release: data['release_date'],
            thumbnail: data['poster_path'],
            watched: 0
          };
          Movie(newMovie)
          .save(function(success, error) {
            if (success) {
              console.log('success adding movie');
              // console.log('success: ', success);
              response.json(success);
            } else {
              console.log('error adding movie: ', error);
              response.send(error);
            }
          });
        }
      });
    });
  }
};


// request example:
// {
//   "poster_path":"/lDlGPZS0UJYKxVlpyff3BMyPc2H.jpg",
//   "adult":false,
//   "overview":"Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
//   "release_date":"2004-04-30",
//   "genre_ids":[35],
//   "id":10625,
//   "original_title":"Mean Girls",
//   "original_language":"en",
//   "title":"Mean Girls",
//   "backdrop_path":"/106vVW7SD1Lts32GsLy7cVETaeA.jpg",
//   "popularity":3.711971,
//   "vote_count":877,
//   "video":false,
//   "vote_average":6.86
// }

// {
// id: 1,
// title: 'Mean Girls',
// release: 2010,
// thumbnail: 'somepath',
// watched: 0
// }