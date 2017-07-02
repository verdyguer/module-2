const express = require("express");
const tweetsController = express.Router();
const User = require("../models/user");
const Tweet = require("../models/tweet");
const moment = require("moment");


// new User
tweetsController.use((req, res, next) => {
  if (req.session.currentUser) { next(); }
  else { res.redirect("/login"); }
});

// new tweets
tweetsController.get("/new", (req, res, next) => {
  res.render("tweets/new",
    { username: req.session.currentUser.username });
});

//1. Find the current user
//2. Find all her tweets, sort them by descending creation date
//3. Pass them to our index view

tweetsController.get("/", (req, res, next) => {
  const user = req.session.currentUser;
  User
    .findOne({ username: req.session.currentUser.username }, "_id username")
    .exec((err, user) => {
      if (!user) { return; }
      Tweet.find({ "user_name": user.username }, "tweet created_at")
        .sort({ created_at: -1 })
        .exec((err, tweets) => {
          console.log("tweets");
          res.render("tweets/index",
            {
              username: user.username,
              tweets,
              moment
            });
        });
    });
});

// And now we will add the logic to save the tweet:
//1. Find the currentUser object
//2. Creates a newTweet tweet instance and fills the information
//3. Saves ito to the database
//4. If OK: Redirects to /tweets
//5. If Not OK: adds an errorMessage and render tweets/new

tweetsController.post("/", (req, res, next) => {
  const user = req.session.currentUser;
  User.findOne({ username: user.username }).exec((err, user) => {
    if (err) { return; }
    const newTweet = Tweet({
      user_id: user._id,
      user_name: user.username,
      tweet: req.body.tweetText
    });
    newTweet.save((err) => {
      if (err) {
        res.render("tweets/new",
          {
            username: user.username,
            errorMessage: err.errors.tweet.message
          });
      } else {
        res.redirect("/tweets");
      }
    });
  });
});
//1. Find the current user
//2. Find all her tweets, sort them by descending creation date
//3. Pass them to our index view

tweetsController.get("/", (req, res, next) => {
  const user = req.session.currentUser;
  User
    .findOne({ username: req.session.currentUser.username }, "_id username")
    .exec((err, user) => {
      if (!user) { return; }
      Tweet.find({ "user_name": user.username }, "tweet created_at")
        .sort({ created_at: -1 })
        .exec((err, tweets) => {
          console.log("tweets");
          res.render("tweets/index",
            {
              username: user.username,
              tweets,
              moment
            });
        });
    });
});
module.exports = tweetsController;
