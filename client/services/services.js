angular.module('watchful.services', [])

.factory('SearchRequest', function ($http, TheMovieDb) {

  return byKeyword = function(keyword) {
    // use theMovieDb getMovies method
    TheMovieDb.keywords.getMovies(keyword, function(error) {
      console.log(error);
    }, function(success) {
      console.log(success); 
    });
  }

});