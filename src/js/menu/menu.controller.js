export class MenuController {
  constructor($location, securityToken) {
    this.$location = $location;
    this.securityToken = securityToken;
  }

  isLogged() {
    return this.securityToken.has();
  }

  isActive(path) {
    return path === this.$location.path();
  }

  logout() {
    this.securityToken.remove();
    this.$location.path('/login');
  }
}

MenuController.$inject = [
  '$location',
  'securityToken',
];
