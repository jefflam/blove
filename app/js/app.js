// Declare app level module which depends on filters, and services
var blove = angular.module('blove', ['$strap.directives']);

blove.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  })
  .when('/feed', {
    templateUrl: 'feed.html',
    controller: 'FeedCtrl'
  })
  .when('/apply', {
    templateUrl: 'apply.html',
    controller: 'ApplyCtrl'
  });
  // .otherwise({
  //   redirectTo: '/view1'
  // });
  
  // $locationProvider.html5Mode(true);
}]);

blove.controller('HomeCtrl', function($scope) {
});

blove.controller('FeedCtrl', function($scope) {
});

blove.controller('ApplyCtrl', function($scope) {
});

blove.controller('ListCtrl', function($scope) {
  $scope.scrollWindow = function() {
    jQuery('body').animate({scrollTop: 515}, 500);
    // Bad code to use jquery, but for animation sake!
    jQuery('.listing-container').animate({opacity: 1}, 500);
    jQuery('.baby-cta').animate({opacity: 0}, 500);
  };

  $scope.popover = {
    "content": "Nanny sharing available! Click to inquire.",
    "saved": false
  }

  $scope.displayDetailTab = function(tab) {
    console.log('yo ' + tab);
  };

  $scope.babysitters = [
    {
      firstName: 'Teresa',
      lastName: 'Aldrige - $45/hour',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'img/babysitter-portrait.png',
      location: 'Palo Alto, CA'
    },
    {
      firstName: 'Ana',
      lastName: 'Navarro - $55/hour',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'img/babysitter-portrait2.png',
      location: 'Stanford, CA'
    },
    {
      firstName: 'Fei',
      lastName: 'Fei  - $45/hour',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'img/babysitter-portrait3.png',
      location: 'Mountain View, CA'
    },
    {
      firstName: 'Melissa',
      lastName: 'Miranda - $50/hour',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'img/babysitter-portrait4.png',
      location: 'Sunnyvale, CA'
    }
  ];
});

blove.directive('listingDetailButtons', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'listing-detail-buttons.html'
  };
});

blove.directive('reviewsBtn', function() {
  return {
    scope: true,
    link: function(scope, element, attrs) {
      element.click('click', function() {
        var parentListingView = element.parent().parent().parent().parent();
        if (parentListingView.css('height') === '180px') {
          element.parent().parent().parent().parent().css('height', 620);
          element.parent().parent().parent().next().next().children('.reviews').addClass('show');
        } else {
          element.parent().parent().parent().parent().css('height', 180);
          element.parent().parent().parent().next().next().children('.reviews').removeClass('show');
        }
      });
    }
  };
});

blove.directive('scheduleBtn', function() {
  return {
    // scope: true,
    link: function(scope, element, attrs) {
      element.click('click', function() {
        var parentListingView = element.parent().parent().parent().parent();
        if (parentListingView.css('height') === '180px') {
          parentListingView.css('height', 700);
          element.parent().parent().parent().next().next().children('.schedule').addClass('show');

        } else {
          parentListingView.css('height', 180);
          element.parent().parent().parent().next().next().children('.schedule').removeClass('show');
        }
      });
    }
  };
});

blove.directive('videoBtn', function() {
  return {
    scope: true,
    link: function(scope, element, attrs) {
      element.click('click', function() {
        var parentListingView = element.parent().parent().parent().parent();
        if (parentListingView.css('height') === '180px') {
          element.parent().parent().parent().parent().css('height', 580);
          element.parent().parent().parent().next().next().children('.video').addClass('show');
        } else {
          element.parent().parent().parent().parent().css('height', 180);
          element.parent().parent().parent().next().next().children('.video').removeClass('show');
        }
      });
    }
  };
});

blove.directive('messageBtn', function() {
  return {
    scope: true,
    link: function(scope, element, attrs) {
      element.click('click', function() {
        var parentListingView = element.parent().parent().parent().parent();
        if (parentListingView.css('height') === '180px') {
          element.parent().parent().parent().parent().css('height', 500);
          element.parent().parent().parent().next().next().children('.message').addClass('show');
        } else {
          element.parent().parent().parent().parent().css('height', 180);
          element.parent().parent().parent().next().next().children('.message').removeClass('show');
        }
      });
    }
  };
});

// blove.directive('listingDetailTab', function() {
//   return {
//     require: 'ListCtrl',
//     restrict: 'E',
//     scope: {},
//     templateUrl: 'listing-detail-tab.html'
//   };
// });

// blove.controller('ListDetailCtrl', function($scope) {
//   $scope.displayTab = function() {
//     if (this.on === false) {
//       this.on = true;
//     } else {
//       this.on = false;
//     }
//   };
// });

blove.directive('toggle', function() {
  return {
    scope: true,
    link: function(scope, element, attrs) {
      scope.on = false;

      scope.toggle = function() {
        scope.on = !scope.on;
      };
    }
  };
});