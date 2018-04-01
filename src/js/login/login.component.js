import {LoginController} from './login.controller';

export const loginComponent = {
  template:
    '<form name="$ctrl.loginForm" ng-submit="$ctrl.submit()">' +
      '<div class="form-group">' +
        '<label for="inputLogin">Login</label>' +
        '<input type="text" class="form-control" id="inputLogin" placeholder="Login" ng-model="$ctrl.login" required>' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="inputPassword">Password</label>' +
        '<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ng-model="$ctrl.password" required>' +
      '</div>' +
      '<button type="submit" class="btn btn-default">Submit</button>' +
    '</form>',

  controller: LoginController,
  bindings: {
  },
};
