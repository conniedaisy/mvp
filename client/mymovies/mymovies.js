angular.module('watchful.mymovies', [])

.controller('MymoviesController', function ($scope, $location, MovieTitle) {

  $scope.baseuri = 'http://image.tmdb.org/t/p/w92';
  $scope.movies = {};

  // need to fetch count from database
  // $scope.count = 0;

  var displayMovies = function() {
    MovieTitle.getAll()
    .then(function(movies) {
      $scope.movies = movies; // movies is an array of objects
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  displayMovies();

  $scope.addCount = function(count) {
    count++;
    // need to send to database
  };

  $scope.minusCount = function(count) {
    count--;
  };

});
