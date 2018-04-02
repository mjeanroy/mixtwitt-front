export function routesConfiguration($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      template: '<tweets></tweets>',
    })
    .when('/login', {
      template: '<login></login>',
    })
    .when('/tweets', {
      template: '<tweets></tweets>',
    })
    .otherwise({
      redirectTo: '/',
    });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}

routesConfiguration.$inject = [
  '$routeProvider',
  '$locationProvider',
];
