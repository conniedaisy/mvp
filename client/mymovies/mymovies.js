angular.module('watchful.mymovies', [])

.controller('MymoviesController', function ($scope, $location, MovieTitle) {
  // console.log('inside MymoviesController');

  $scope.baseuri = 'http://image.tmdb.org/t/p/w185';
  $scope.movies = {};

  var displayMovies = function() {
    MovieTitle.getAll()
    .then(function(movies) {
      // console.log('movies: ', movies);
      $scope.movies = movies; // movies is an array of objects
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  displayMovies();

});
