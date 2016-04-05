angular.module('watchful.search', [])

.controller('SearchController', function ($scope, $location, SearchRequest) {

  $scope.searchString = '';

  $scope.searchTitle = function () {
    // console.log('searchTitle is called');
    console.log($scope.searchString);
    console.log(SearchRequest);
    SearchRequest.byKeyword({query: $scope.searchString})
    .then(function() {
      $location.path('/');
    })
    .catch(function (error) {
      console.log(error);
    });

  };

});
