angular.module('watchful.services', [])

.factory('SearchRequest', ['$http', 'TheMovieDb', function ($http, TheMovieDb) {

  var byKeyword = function(keyword, successCallback, errorCallback) {
    return TheMovieDb.getMovies(keyword, successCallback, errorCallback);
  };

  return {
    byKeyword: byKeyword
  };
}]);