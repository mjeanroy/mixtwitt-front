import angular from 'angular';
import {routesConfiguration} from './routes.configuration';

export const routingModule = angular.module('mixtwitt.routing', ['ngRoute'])
  .config(routesConfiguration);
