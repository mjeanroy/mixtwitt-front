export function tweetAccountFilter() {
  return function tweetAccount(account) {
    return account ? `@${account}` : account;
  };
}
