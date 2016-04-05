angular.module('watchful.services', [])

.factory('SearchRequest', ['$http', 'TheMovieDb', function ($http, TheMovieDb) {

  var byKeyword = function(queryObject, successCallback, errorCallback) {
    return TheMovieDb.getMovies(queryObject, successCallback, errorCallback);
  };

  // var forImage = function(idObject, successCallback, errorCallback) {
  //   return TheMovieDb.getImages(idObject, successCallback, errorCallback);
  // };

  return {
    byKeyword: byKeyword,
    // forImage: forImage
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