import './jq';

import angular from 'angular';
import 'angular-route';
import 'angular-sanitize';

import {routingModule} from './routing/index';
import {menuModule} from './menu/index';
import {securityModule} from './security/index';
import {loginModule} from './login/index';
import {tweetModule} from './tweet/index';

angular
  .module('mixtwitt', [routingModule.name, menuModule.name, securityModule.name, loginModule.name, tweetModule.name])
  .value('API', 'https://service-app.mr-robot.sh');
