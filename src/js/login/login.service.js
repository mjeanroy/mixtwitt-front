export class LoginService {
  constructor($http, securityToken, API, SECURITY_HEADER) {
    this.endpoint = `${API}/api`;
    this.securityToken = securityToken;
    this.$http = $http;
    this.headerName = SECURITY_HEADER;
  }

  login(login, password) {
    return this.$http.post(`${this.endpoint}/login`, {login, password}).then((response) => {
      const token = response.headers(this.headerName);
      this.securityToken.set(token);
      return response.data;
    });
  }

  logout() {
    return this.$http.post(`${this.endpoint}/logout`).then((response) => {
      this.securityToken.remove();
      return response.data;
    });
  }
}

LoginService.$inject = [
  '$http',
  'securityToken',
  'API',
  'SECURITY_HEADER',
];
