angular.module('watchful.services', ['watchful.moviedb'])

.factory('SearchRequest', ['$http', 'TheMovieDb', function ($http, TheMovieDb) {

  var byKeyword = function(keyword) {
    // use theMovieDb getMovies method
    // console.log("TheMOvieDb: ", TheMovieDb);
    return TheMovieDb.getMovies(keyword, function(success) {
      console.log('success!');
      return success;
    }, function(error) {
      console.log('there is an error');
      console.log('error: ', error);
    });
  };

  return {
    byKeyword: byKeyword
  };
}]);