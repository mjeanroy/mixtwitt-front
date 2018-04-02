import angular from 'angular';
import 'angular-sanitize';

import {tweetAccountFilter} from './tweet-account.filter';
import {TweetsService} from './tweets.service';
import {tweetComponent} from './tweet.component';
import {tweetFormComponent} from './tweet-form.component';
import {tweetsComponent} from './tweets.component';

export const tweetModule = angular.module('mixtwitt.tweet', ['ngSanitize'])
  .filter('tweetAccount', tweetAccountFilter)
  .service('tweetsService', TweetsService)
  .component('tweets', tweetsComponent)
  .component('tweetForm', tweetFormComponent)
  .component('tweet', tweetComponent);
