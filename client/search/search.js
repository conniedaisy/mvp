angular.module('watchful.search', [])

.controller('SearchController', function ($scope, $location, SearchRequest, MovieTitle) {

  $scope.baseuri = 'http://image.tmdb.org/t/p/w185';
  $scope.results = {};
  $scope.searchString = '';
  
  $scope.searchTitle = function () {
    SearchRequest.byKeyword({query: $scope.searchString}, function(success) {
      $scope.results = JSON.parse(success).results; // $scope.results is an array
      return success;
    }, function(error) {
      console.log('error: ', error);
      return error;
    }); //asynchronous 
  };

  $scope.addMovieToDb = function(result) {
    MovieTitle.addMovie(result)
    .then(function() {
      $location.path('/mymovies');
    });
  };

});

// example imageuri
// http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg

// http://image.tmdb.org/t/p/w1920/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg
// {
//   "id":286217,
//   "backdrops": [
//     {"aspect_ratio":1.77777777777778,
//     "file_path":"/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
//     "height":1080,
//     "iso_639_1":null,
//     "vote_average":5.61904761904762,
//     "vote_count":12,
//     "width":1920
//     },
//     {"aspect_ratio":1.77777777777778,
//     "file_path":"/sEgULSEnywgdSesVHFHpPAbOijl.jpg",
//     "height":1440,
//     "iso_639_1":null,
//     "vote_average":5.50925925925926,
//     "vote_count":9,
//     "width":2560
//     },
//     {"aspect_ratio":1.77777777777778,
//     "file_path":"/kAOUtMMJ3RqwSZ4JX4hynuPOwMk.jpg",
//     "height":2160,
//     "iso_639_1":null,
//     "vote_average":5.38961038961039,
//     "vote_count":3,
//     "width":3840
//     }
//   ]
// }
