export class SecurityService {
  constructor($http, $q, API, securityToken) {
    this.$http = $http;
    this.$q = $q;
    this.securityToken = securityToken;
    this.endpoint = `${API}/api`;

    this._me = null;
    this._authenticated = false;
  }

  me() {
    if (!this._me) {
      this._me = this.$http.get(`${this.endpoint}/me`)
        .then((response) => {
          return response.data;
        })
        .catch((rejection) => {
          this._me = null;
          return this.$q.reject(rejection);
        });
    }

    return this._me;
  }
}

SecurityService.$inject = [
  '$http',
  '$q',
  'API',
  'securityToken',
];
