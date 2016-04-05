angular.module('watchful.search', [])

.controller('SearchController', function ($scope, $location, SearchRequest, MovieTitle) {

  $scope.searchString = '';
  $scope.results = {};

  $scope.searchTitle = function () {
    SearchRequest.byKeyword({query: $scope.searchString}, function(success) {
      $scope.results = JSON.parse(success).results; // $scope.results is an array
      return success;
    }, function(error) {
      console.log('there is an error');
      console.log('error: ', error);
      return error;
    }); //asynchronous
  };

  $scope.addMovieToDb = function() {
    console.log('clicked');
    console.log($scope.results);
    MovieTitle.addMovie($scope.results[0]);
  };

});
