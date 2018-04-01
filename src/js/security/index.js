import angular from 'angular';
import {securityConfiguration} from './security.configuration';
import {SecurityService} from './security.service';
import {SecurityToken} from './security-token.service';
import {SecurityInterceptor} from './security.interceptor';

export const securityModule = angular.module('mixtwitt.security', [])
  .value('SECURITY_HEADER', 'Mix-Twitt')
  .config(securityConfiguration)
  .service('securityInterceptor', SecurityInterceptor)
  .service('securityService', SecurityService)
  .service('securityToken', SecurityToken);
