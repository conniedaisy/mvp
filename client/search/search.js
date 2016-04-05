angular.module('watchful.search', [])

.controller('SearchController', function ($scope, $location, SearchRequest) {

  $scope.searchString = '';
  $scope.results = {};

  $scope.searchTitle = function () {
    // console.log("SearchRequest: ", SearchRequest.byKeyword({query: $scope.searchString}));
    SearchRequest.byKeyword({query: $scope.searchString})
    .then(function(data) {
      $scope.results = data.results; // an array of objects
      // $location.path('/');
    })
    .catch(function (error) {
      console.log(error);
    });

  };

});
