const Twit = require("twit");
const twitterKeys = require("./config");

const T = new Twit(twitterKeys);

// for retweeting a user's tweet
const retweet = tweet => {
  const isOriginalTweet =
    !tweet.hasOwnProperty("retweeted_status") && !tweet.in_reply_to_status_id;
  if (isOriginalTweet) {
    console.log("TWEET ID: ", tweet.id_str);
    const params = {
      id: tweet.id_str
    };
    const tweeted = (error, data, response) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("successfully retweeted");
      }
    };

    T.post("statuses/retweet", params, tweeted);
  }
};

//open a stream to listen to tweets tweeted by the people am following
const listenToFriends = ids => {
  const stream = T.stream("statuses/filter", {
    follow: ids
  });

  stream.on("tweet", retweet);
};

// get list of the user IDs am following
const params = {
  screen_name: "wisdommagpie"
};

const gotData = (error, data, response) => listenToFriends(data.ids);

T.get("friends/ids", params, gotData);
