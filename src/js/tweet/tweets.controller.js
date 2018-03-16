export class TweetsController {
  constructor(tweetsService) {
    this.tweetsService = tweetsService;
    this.tweets = [];
  }

  $onInit() {
    this.tweetsService.fetch().then((tweets) => {
      this.tweets = tweets;
    });
  }

  submit(tweet) {
    this.tweetsService.save(tweet)
      .then(() => {
        this.tweets = this.tweets.concat(tweet);
      });
  }
}
