angular.module('watchful.search', [])

.controller('SearchController', function ($scope, $location, SearchRequest) {

  $scope.searchString = '';
  $scope.results = {};

  $scope.searchTitle = function () {
    SearchRequest.byKeyword({query: $scope.searchString}, function(success) {
      $scope.results = JSON.parse(success).results;
      return success;
    }, function(error) {
      console.log('there is an error');
      console.log('error: ', error);
      return error;
    }); //asynchronous

  };

});
