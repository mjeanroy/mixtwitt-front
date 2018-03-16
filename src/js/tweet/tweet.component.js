export const tweetComponent = {
  template:
    '<div>' +
      '<span class="label label-primary">{{ ::$ctrl.tweet.login | tweetAccount }}</span>' +
      '&nbsp;' +
      '<span>{{ ::$ctrl.tweet.message }}</span>' +
    '</div>',

  bindings: {
    tweet: '<',
  },
};
