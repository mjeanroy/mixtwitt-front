export class SecurityInterceptor {
  constructor($location, $q, securityToken, SECURITY_HEADER) {
    this.$location = $location;
    this.$q = $q;
    this.securityToken = securityToken;
    this.headerName = SECURITY_HEADER;

    this.request = this.request.bind(this);
    this.responseError = this.responseError.bind(this);
  }

  request(config) {
    if (this.securityToken.has()) {
      config.headers[this.headerName] = this.securityToken.get();
    }
    return config;
  }

  responseError(rejection) {
    if (rejection.status === 401) {
      this.$location.path('/login');
    }

    return this.$q.reject(rejection);
  }
}

SecurityInterceptor.$inject = [
  '$location',
  '$q',
  'securityToken',
  'SECURITY_HEADER',
];
