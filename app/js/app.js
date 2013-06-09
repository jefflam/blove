// Declare app level module which depends on filters, and services
var blove = angular.module('blove', []);

blove.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  })
  .when('/feed', {
    templateUrl: 'feed.html',
    controller: 'FeedCtrl'
  })
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

  $scope.popover = function() {
    // $scope.pop
  }

  $scope.displayDetailTab = function(tab) {
    console.log('yo ' + tab);
  };

  $scope.babysitters = [
    {
      firstName: 'Teresa',
      lastName: 'Aldrige',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'img/babysitter-portrait.png',
      location: 'Palo Alto, CA'
    },
    {
      firstName: 'Ana',
      lastName: 'Navarro',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'img/babysitter-portrait2.png',
      location: 'Stanford, CA'
    },
    {
      firstName: 'Fei',
      lastName: 'Fei',
      description: 'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      portrait: 'img/babysitter-portrait3.png',
      location: 'Mountain View, CA'
    },
    {
      firstName: 'Melissa',
      lastName: 'Miranda',
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
        console.log(parentListingView.css('height'));
        if (parentListingView.css('height') === '180px') {
          element.parent().parent().parent().parent().css('height', 620);
          angular.element('.listing-detail-container .reviews').addClass('show');
        } else {
          element.parent().parent().parent().parent().css('height', 180);
          angular.element('.listing-detail-container .reviews').removeClass('show');
        }
      });
    }
  };
});

blove.directive('scheduleBtn', function() {
  return {
    scope: true,
    link: function(scope, element, attrs) {
      element.click('click', function() {
        var parentListingView = element.parent().parent().parent().parent();
        console.log(parentListingView.css('height'));
        if (parentListingView.css('height') === '180px') {
          element.parent().parent().parent().parent().css('height', 700);
          angular.element('.listing-detail-container .schedule').addClass('show');
        } else {
          element.parent().parent().parent().parent().css('height', 180);
          angular.element('.listing-detail-container .schedule').removeClass('show');
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
        console.log(parentListingView.css('height'));
        if (parentListingView.css('height') === '180px') {
          element.parent().parent().parent().parent().css('height', 580);
          angular.element('.listing-detail-container .video').addClass('show');
        } else {
          element.parent().parent().parent().parent().css('height', 180);
          angular.element('.listing-detail-container .video').removeClass('show');
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
        console.log(parentListingView.css('height'));
        if (parentListingView.css('height') === '180px') {
          element.parent().parent().parent().parent().css('height', 500);
          angular.element('.listing-detail-container .message').addClass('show');
        } else {
          element.parent().parent().parent().parent().css('height', 180);
          angular.element('.listing-detail-container .message').removeClass('show');
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