let Twit = require("twit");
let twitterKeys = require("./config");

let T = new Twit(twitterKeys);

let params = {
  q: "Modi",
  count: 10
};

const gotData = (error, data, response) => {
  console.log(data);
};

T.get("search/tweets", params, gotData);
