var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("spotify");

var userInput = process.argv[2];
var userSearch = process.argv[3];

console.log(userInput);


function displayTweets() {
  if (userInput.toLowerCase() === "my-tweets") {

    var client = new Twitter(keys.twitterKeys);

    var params = {
      screen_name: keys.screen_name
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
      if (!error) {
        for (var i = 0; i < tweets.length; i++) {
          if (i === 20) {
            // "break" will stop the loop from running
            break;
          }
          console.log("THESE ARE MY TWEETS  " + tweets[i].text);
          console.log("THESE ARE THE DATES THEY WERE CREATED  " + tweets[i].created_at);
        }
      }
    });
  }
}


function displaySong() {
  spotify.search({
    type: 'track',
    query: userSearch
  }, function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }
    console.log(data);

    // Do something with 'data'
  });
}

function displayMovie() {

}

function doWhatItSays() {

}

switch (userInput) {
  case "my-Tweets":
    displayTweets();
    break;
  case "spotify-this-song":
    displaySong();
    break;
  case "movie-this":
    displayMovie();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
}
