import {TweetsController} from './tweets.controller';

export const tweetsComponent = {
  template:
    '<tweet-form on-submit="$ctrl.submit(tweet)"></tweet-form>' +
    '<div>' +
      '<div class="card">' +
        '<div class="card-body" ng-repeat="tweet in $ctrl.tweets | orderBy:\'-id\'">' +
          '<tweet tweet="tweet"></tweet>' +
        '</div>' +
      '</div>' +
    '</div>',

  controller: TweetsController,

  bindings: {
    tweets: '<',
  },
};
