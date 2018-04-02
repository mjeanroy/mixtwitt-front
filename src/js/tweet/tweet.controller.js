export class TweetController {
  constructor($sce) {
    this.$sce = $sce;
  }

  $onInit() {
    this.login = this.tweet.login;
    this.message = this.$sce.trustAsHtml(this.tweet.message);
  }
}

TweetController.$inject = [
  '$sce',
];
