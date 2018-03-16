export class TweetFormController {
  $onInit() {
    this._initTweet();
  }

  submit(tweet) {
    this.onSubmit({tweet});
    this._initTweet();
  }

  _initTweet() {
    this.tweet = {
      login: '',
      message: '',
    };
  }
}
