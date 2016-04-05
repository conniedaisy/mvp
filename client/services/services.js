angular.module('watchful.services', ['watchful.moviedb'])

.factory('SearchRequest', ['$http', 'TheMovieDb', function ($http, TheMovieDb) {

  var byKeyword = function(keyword) {
    // use theMovieDb getMovies method
    console.log("TheMOvieDb: ", TheMovieDb);
    TheMovieDb.getMovies(keyword, function(error) {
      console.log(error);
    }, function(success) {
      console.log(success); 
    });
  };

  return {
    byKeyword: byKeyword
  };
}]);