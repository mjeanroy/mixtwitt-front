import angular from 'angular';
import {LoginService} from './login.service';
import {loginComponent} from './login.component';

export const loginModule = angular.module('mixtwitt.login', [])
  .service('loginService', LoginService)
  .component('login', loginComponent);
