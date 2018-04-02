import angular from 'angular';
import {menuComponent} from './menu.component';

export const menuModule = angular.module('mixtwitt.menu', [])
  .component('menu', menuComponent);
