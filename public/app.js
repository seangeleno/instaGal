var app = angular.module("instaGal", ['$ng-route']);

app.config(['$routeProvider'], function($routeProvider){
  $routeProvider.
    when('/gallery', {
      templateUrl: 'views/gallery.view.html',
      controller: 'GalleryCtrl'
    })
    .otherwise({redirectTo: '/gallery'});
});
