angular.module('watchful.services', [])

.factory('SearchRequest', ['$http', 'TheMovieDb', function ($http, TheMovieDb) {

  var byKeyword = function(keyword, successCallback, errorCallback) {
    return TheMovieDb.getMovies(keyword, successCallback, errorCallback);
  };

  return {
    byKeyword: byKeyword
  };
}])

.factory('MovieTitle', ['$http', function($http) {
  var addMovie = function (movie) {
    return $http({
      method: 'POST',
      url: '/api/mymovies',
      data: movie
    });
  };
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/mymovies'
    })
    .then(function (response) {
      return response.data;
    });
  };
  return {
    addMovie: addMovie,
    getAll: getAll
  };
}]);