export function securityConfiguration($httpProvider) {
  $httpProvider.interceptors.push('securityInterceptor');
}

securityConfiguration.$inject = [
  '$httpProvider',
];
