import './jq';

import angular from 'angular';
import 'angular-route';

import {routingModule} from './routing/index';
import {securityModule} from './security/index';
import {loginModule} from './login/index';
import {tweetModule} from './tweet/index';

angular
  .module('mixtwitt', [routingModule.name, securityModule.name, loginModule.name, tweetModule.name])
  .value('API', 'https://service-app.mr-robot.sh');
