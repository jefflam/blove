// Declare app level module which depends on filters, and services
var blove = angular.module('blove', []);

blove.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  })
  // .when('/:location', {
  //   templateUrl: 'list.html',
  //   controller: 'ListCtrl'
  // })
  // .otherwise({
  //   redirectTo: '/view1'
  // });
}]);

blove.controller('HomeCtrl', function($scope) {

});

blove.controller('ListCtrl', function($scope) {

  $scope.scrollWindow = function() {
    jQuery('body').animate({scrollTop: 515}, 500);
    // Bad code to use jquery, but for animation sake!
    jQuery('.listing-container').animate({opacity: 1}, 500);
    jQuery('.baby-cta').animate({opacity: 0}, 500);
  };

  $scope.babysitters = [
    {
      firstName: 'Teresa',
      lastName: 'Aldrige',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'http://placehold.it/180x180',
      location: 'Palo Alto, CA'
    },
    {
      firstName: 'Ana',
      lastName: 'Navarro',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'http://placehold.it/180x180',
      location: 'Stanford, CA'
    },
    {
      firstName: 'Fei',
      lastName: 'Fei',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'http://placehold.it/180x180',
      location: 'Mountain View, CA'
    },
    {
      firstName: 'Melissa',
      lastName: 'Miranda',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'http://placehold.it/180x180',
      location: 'Sunnyvale, CA'
    }
  ];
});

blove.directive('show', function() {
  return function(scope, element, attrs) {
    element.addClass('hide');
  };
});