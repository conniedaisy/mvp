angular.module('watchful.mymovies', [])

.controller('MymoviesController', function ($scope, $location, MovieTitle) {
  // console.log('inside MymoviesController');
  $scope.movies = {};

  $scope.displayMovies = function() {
    MovieTitle.getAll()
    .then(function(movies) {
      console.log(movies);
      $scope.movies = movies;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

});
