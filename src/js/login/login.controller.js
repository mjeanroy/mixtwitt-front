export class LoginController {
  constructor($location, loginService, securityService) {
    this.$location = $location;
    this.loginService = loginService;
    this.securityService = securityService;

    this.login = '';
    this.password = '';
  }

  $onInit() {
    this.securityService.me().then(() => {
      this._redirect();
    });
  }

  submit() {
    this.loginService.login(this.login, this.password).then(() => {
      this._redirect();
    });
  }

  _redirect() {
    this.$location.path('/tweets');
  }
}

LoginController.$inject = [
  '$location',
  'loginService',
  'securityService',
];
