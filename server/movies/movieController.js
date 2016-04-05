var Q = require('q');
var Movie = require('./movieModel.js');
var helpers = require('../helpers.js');

// Promisify mongoose model methods with the `q` promise library
var findMovie = Q.nbind(Movie.findOne, Movie); // Same as Model.find, but only receives a single document as second parameter
var findAllMovies = Q.nbind(Movie.find, Movie); // Model.find(query, fields, options, callback), callback = function(err, docs) {}; docs is an array
var createMovie = Q.nbind(Movie.create, Movie); 


module.exports = {

  // for app.get('/mymovies')
  // get all movies from MongoDB
  allMovies: function(request, response, next) {
    findAllMovies({}) // returns all movies in an array
    .then(function(movies) {
      response.json(movies);
    })
    .fail(function(err) {
      next(error);
    });
  },

  // user clicks on a movie from search
  // if movie exists in database, respond with movie info
  // else, add movie to database
  addMovie: function(request, response, next) {
    // check if movie already exists in database
    helpers.collectData(request, function(data) {
      console.log('request is: ', data);
      
    });
    // var id = request.body.id;
    // findMovie({id: id})
    // .then(function(found) {
    //   if (found) {
    //     response.send(found);
    //   } else {
    //     // TODO: if not found, post
    //   }
    // })
    // .then(function() {

    // })
  }

  // newLink: function (req, res, next) {

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
