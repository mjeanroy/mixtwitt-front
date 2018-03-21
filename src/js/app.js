import 'jquery';
import angular from 'angular';
import { tweetModule } from './tweet/index';

angular.module('mixtwitt', [tweetModule.name])
