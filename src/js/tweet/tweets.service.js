export class TweetsService {
  constructor(API, $http) {
    this.endpoint = `${API}/api/tweets`;
    this.$http = $http;
  }

  fetch() {
    return this.$http.get(this.endpoint).then((response) => (
      response.data
    ));
  }

  save(tweet) {
    return this.$http.post(this.endpoint, tweet).then((response) => (
      response.data
    ));
  }
}
