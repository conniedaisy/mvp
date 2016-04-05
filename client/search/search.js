angular.module('watchful.search', [])

.controller('SearchController', function ($scope, $location, SearchRequest) {

  // $scope.link = {};
  $scope.searchString = '';

  $scope.searchTitle = function () {
    console.log('searchTitle is called');

    SearchRequest.byKeyword($scope.searchString)
    .then(function() {
      $location.path('/');
    })
    .catch(function (error) {
      console.log(error);
    });

  };

});
