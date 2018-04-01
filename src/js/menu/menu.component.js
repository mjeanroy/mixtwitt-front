import {MenuController} from './menu.controller';

export const menuComponent = {
  template:
    '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" role="navigation">' +
      '<div class="container">' +
        '<div class="navbar-header">' +
          '<h3 style="color: #fff; text-align: center; margin-top: 13px; margin-right: 15px;">MixTwitt</h3>' +
        '</div>' +
        '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
          '<ul class="navbar-nav mr-auto">' +
            '<li class="nav-item" ng-class="{active: $ctrl.isActive(\'/\')}">' +
              '<a class="nav-link" href="/">Home</a>' +
            '</li>' +
            '<li class="nav-item" ng-show="$ctrl.isLogged()" ng-class="{active: $ctrl.isActive(\'/tweets\')}">' +
              '<a class="nav-link" href="/tweets">Tweets</a>' +
            '</li>' +
            '<li class="nav-item" ng-show="$ctrl.isLogged()" ng-click="$ctrl.logout()">' +
              '<a class="nav-link" style="cursor: pointer">Logout</a>' +
            '</li>' +
            '<li class="nav-item" ng-hide="$ctrl.isLogged()" ng-class="{active: $ctrl.isActive(\'/login\')}">' +
              '<a class="nav-link" href="/login">Login</a>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>',

  controller: MenuController,

  bindings: {
  },
};
