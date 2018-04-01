export function routesConfiguration($routeProvider) {
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
}

routesConfiguration.$inject = [
  '$routeProvider',
];
