export class TweetController {
  constructor() {
  }

  $onInit() {
    this.login = this.tweet.login;
    this.message = this.tweet.message;
  }
}

TweetController.$inject = [
];
