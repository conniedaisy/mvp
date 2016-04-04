angular.module('watchful.search', [])

.controller('SearchController', function ($scope, $location, Links) {

  // $scope.link = {};

  $scope.searchTitle = function () {
    console.log('searchTitle is called');
    // $scope.loading = true;
    // Links.addOne($scope.link)
    //   .then(function () {
    //     // $scope.loading = false;
    //     $location.path('/');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

});
