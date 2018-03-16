import {TweetFormController} from './tweet-form.controller';

export const tweetFormComponent = {
  template:
    '<form name="$ctrl.tweetForm">' +
      '<div class="form-group" style="text-align: center">' +
        '<input name="tweetLogin" class="form-control" type="text" placeholder="Login" ng-model="$ctrl.tweet.login" required>' +
        '<br>' +
        '<textarea name="tweetContent" class="form-control" placeholder="Tweet" ng-model="$ctrl.tweet.message" required maxlength="140"></textarea>' +
        '<br>' +
        '<button id="foo" class="btn btn-success" ng-click="$ctrl.submit($ctrl.tweet);" ng-disabled="$ctrl.tweetForm.$invalid">Tweet!</button>' +
      '</div>' +
    '</form>',

  controller: TweetFormController,
  bindings: {
    onSubmit: '&',
  },
};
