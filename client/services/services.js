angular.module('watchful.services', [])

.factory('SearchRequest', function ($http, theMovieDb) {

  var byKeyword = function(keyword) {
    // use theMovieDb getMovies method
    theMovieDb.keywords.getMovies(keyword);

  }

});