angular.module('watchful', [
  'watchful.moviedb',
  'watchful.services',
  'watchful.search',
  'watchful.mymovies',
  'ngRoute'
])
.config((function ($routeProvider) {
  // console.log('inside $routeProvider');
  $routeProvider
    .when('/mymovies', {
      templateUrl: 'mymovies/mymovies.html',
      controller: 'MymoviesController'
    })
    .when('/search', {
      templateUrl: 'search/search.html',
      controller: 'SearchController'
    })
    .otherwise({
      redirectTo: '/'
    });
}));