import {TweetController} from './tweet.controller';

export const tweetComponent = {
  template:
    '<div>' +
      '<span class="badge badge-primary" style="display: inline-block; min-width: 80px">{{ ::$ctrl.login | tweetAccount }}</span>' +
      '&nbsp;' +
      '<span ng-bind-html="::$ctrl.message"></span>' +
    '</div>',

  controller: TweetController,

  bindings: {
    tweet: '<',
  },
};
