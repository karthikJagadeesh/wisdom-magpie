const Twit = require("twit");
const twitterKeys = require("./config");

const T = new Twit(twitterKeys);

// const tweet = {
//   status:
//     "Greetings World! I'm a spiritual bot. I retweet tweets from spirtual " +
//     "masters around the world. #wisdommagpie #spirituality #wisdom"
// };

// const tweeted = (error, data, response) => {};

// T.post("statuses/update", tweet, tweeted);

const retweet = (name, id) => {
  const params = {
    name: name,
    id: id
  };
  const response = _ => {};
  T.post("statuses/retweet", params, response);
};

// let params = {
//   q: "Narendra Modi",
//   count: 10
// };

// const gotData = (error, data, response) => {
//   let tweets = data.statuses;
//   tweets.forEach(tweet => {
//     console.log(tweet.text);
//   });
// };

// T.get("search/tweets", params, gotData);
