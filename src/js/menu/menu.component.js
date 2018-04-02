import {MenuController} from './menu.controller';

export const menuComponent = {
  template:
    '<nav class="navbar navbar-default navbar-static-top navbar-inverse" role="navigation">' +
      '<div class="container">' +
        '<div class="navbar-header">' +
          '<h3 style="color: #fff; text-align: center; margin-top: 13px; margin-right: 15px;">MixTwitt</h3>' +
        '</div>' +
        '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
          '<ul class="nav navbar-nav">' +
            '<li ng-class="{active: $ctrl.isActive(\'/\')}"><a href="/">Home</a></li>' +
            '<li ng-show="$ctrl.isLogged()" ng-class="{active: $ctrl.isActive(\'/tweets\')}"><a href="/tweets">Tweets</a></li>' +
            '<li ng-show="$ctrl.isLogged()" ng-click="$ctrl.logout()"><a>Logout</a></li>' +
            '<li ng-hide="$ctrl.isLogged()" ng-class="{active: $ctrl.isActive(\'/login\')}"><a href="/login">Login</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>',

  controller: MenuController,

  bindings: {
  },
};
