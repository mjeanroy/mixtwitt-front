import {TweetController} from './tweet.controller';

export const tweetComponent = {
  template:
    '<div>' +
      '<span class="label label-primary">{{ ::$ctrl.login | tweetAccount }}</span>' +
      '&nbsp;' +
      '<span ng-bind-html="::$ctrl.message"></span>' +
    '</div>',

  controller: TweetController,

  bindings: {
    tweet: '<',
  },
};
